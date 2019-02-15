import array from 'lodash/array';
import ZAFClient from './misc/ZAFClient';

export const actions = {
  CHANGE_STATE: 'CHANGE_STATE',
};

export const setAppHeight = (height) => {
  ZAFClient.invoke('resize', { width: '100%', height: `${height}px` });
};

export const changeState = payload => ({
  type: actions.CHANGE_STATE,
  ...payload,
});

export const applyListeners = () => (dispatch, getState) => {
  ZAFClient.on('ticket.status.changed', ticketStatus => (
    dispatch(changeState({ ticketStatus }))
  ));

  ZAFClient.on('ticket.custom_field_360016232092.changed', (subcategory) => {
    const { allSubcategories } = getState();

    return dispatch(changeState({
      category: '',
      subcategories: allSubcategories,
      subcategory,
    }));
  });

  ZAFClient.on('ticket.save', () => {
    const { subcategory } = getState();

    if (!subcategory) {
      return 'Ticket must be categorized.';
    }

    return true;
  });
};

export const getTicketData = () => (dispatch) => {
  const paths = [
    'ticket.status',
    'currentUser.groups',
    'ticket.customField:custom_field_360016232092',
    'ticket.id',
  ];

  return ZAFClient.get(paths)
    .then((res) => {
      const ticketData = {
        ticketStatus: res['ticket.status'],
        groups: res['currentUser.groups'],
        subcategory: res['ticket.customField:custom_field_360016232092'],
        ticketId: res['ticket.id'],
      };

      return dispatch(changeState(ticketData));
    });
};

export const setSubcategoryTicketField = (subcategory) => {
  return ZAFClient.set('ticket.customField:custom_field_360016232092', subcategory);
};

export const getSavedSubcategoryFromTicket = () => (dispatch, getState) => {
  const { ticketId } = getState();

  return ZAFClient.request(`/api/v2/tickets/${ticketId}.json`)
    .then((res) => {
      const { custom_fields: customFields } = res.ticket;
      const subcategoryField = customFields.filter(field => field.id === 360016232092)[0];
      return dispatch(changeState({ savedSubcategory: subcategoryField.value }));
    });
};

export const getSubcategories = () => (
  ZAFClient.request('/api/v2/ticket_fields/360016232092.json')
);

export const setSubcategoryOnTicket = subcategory => (dispatch, getState) => {
  const { ticketId } = getState();

  const data = {
    ticket: {
      custom_fields: [{
        id: 360016232092,
        value: subcategory,
      }],
    },
  };

  ZAFClient.request({
    url: `/api/v2/tickets/${ticketId}.json`,
    type: 'PUT',
    data: JSON.stringify(data),
    contentType: 'application/json',
  });
};

export const getAllCategories = () => (
  ZAFClient.request('/api/custom_resources/resources?type=category&per_page=1000')
);

export const getCategoriesByGroup = groupId => (
  ZAFClient.request(`/api/custom_resources/resources/zen:group:${groupId}/related/groups_to_category?per_page=1000`)
);

export const getCategoriesForGroups = () => (dispatch, getState) => {
  const { groups } = getState();
  const getCategoriesByGroupPromises = [...groups.map(g => getCategoriesByGroup(g.id))];

  return Promise.all(getCategoriesByGroupPromises)
    .then((res) => {
      const categories = array.unionBy(...res.map(r => r.data), 'id');
      return dispatch(changeState({ categories }));
    });
};

export const getAllSubcategories = () => dispatch => (
  ZAFClient.request('/api/custom_resources/resources?type=subcategory&per_page=1000')
    .then(res => dispatch(changeState({
      allSubcategories: res.data,
      subcategories: res.data,
    })))
);

export const getSubcategoriesByCategory = categoryId => (
  ZAFClient.request(`/api/custom_resources/resources/${categoryId}/related/categories_to_subcategory?per_page=1000`)
);
