import ZAFClient from './misc/ZAFClient';

export const actions = {
    RESET_STORE: 'RESET_STORE',
    CHANGE_STATE: 'CHANGE_STATE',
};

export const setAppHeight = (height) => {
    ZAFClient.invoke('resize', { width: '100%', height: (height) + 'px' });
};

export const applyListeners = () => (dispatch, getState) => {
    ZAFClient.on('ticket.status.changed', function (ticket_status) {
        dispatch(changeState({ ticket_status }));
    });

    ZAFClient.on('ticket.custom_field_360016232092.changed', function (subcategory) {
        dispatch(changeState({ subcategory }));
    });

    ZAFClient.on('ticket.save', function () {
        const { subcategory } = getState();

        if (!subcategory) {
            return 'Ticket must be categorized.';
        }

        return true;
    });
};

export const getTicketData = () => {
    const paths = [
        'ticket.status',
        'currentUser.groups',
        'ticket.customField:custom_field_360016232092',
        'ticket.id',
    ];

    return ZAFClient.get(paths);
};

export const setSubcategoryTicketField = (subcategory) => {
    return ZAFClient.set('ticket.customField:custom_field_360016232092', subcategory);
};

export const getSavedSubcategoryFromTicket = () => (dispatch, getState) => {
    const { ticket_id } = getState();

    return ZAFClient.request(`/api/v2/tickets/${ticket_id}.json`);
};

export const getSubcategories = () => {
    return ZAFClient.request('/api/v2/ticket_fields/360016232092.json');
}

export const setSubcategoryOnTicket = (subcategory) => (dispatch, getState) => {
    const { ticket_id } = getState();

    const data = {
        ticket: {
            custom_fields: [{ 'id': 360016232092, 'value': subcategory }]
        }
    };

    ZAFClient.request({
        url: `/api/v2/tickets/${ticket_id}.json`,
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json'
    });
};

export const resetStore = () => ({
    type: actions.RESET_STORE,
});

export const changeState = (payload) => ({
    type: actions.CHANGE_STATE,
    ...payload,
});