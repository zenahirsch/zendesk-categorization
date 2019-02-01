import ZAFClient from './misc/ZAFClient';

//import subcategories from './subcategories';

export const actions = {
    RESET_STORE: 'RESET_STORE',
    CHANGE_STATE: 'CHANGE_STATE',
};

export const setAppHeight = (height) => {
    ZAFClient.invoke('resize', { width: '100%', height: (height) + 'px' });
};

export const applyListeners = () => (dispatch) => {
    /*ZAFClient.on('ticket.custom_field_360016232092.changed', function (subcategory) {
        dispatch(changeState({ saved_subcategory: subcategory }));
    });*/

    ZAFClient.on('ticket.status.changed', function (ticket_status) {
        dispatch(changeState({ ticket_status }));
    });
};

export const getTicketStatus = () => (dispatch) => {
    ZAFClient.get('ticket.status').then(function (data) {
        dispatch(changeState({ ticket_status: data['ticket.status'] }));
    });
};

export const getGroup = () => (dispatch) => {
    ZAFClient.get('currentUser.groups').then(function (data) {
        dispatch(changeState({ groups: data['currentUser.groups'] }));
    });
};


export const getSavedSubcategoryFromTicket = () => (dispatch) => {
    ZAFClient.get('ticket.customField:custom_field_360016232092').then(function (data) {
        dispatch(changeState({ saved_subcategory: data['ticket.customField:custom_field_360016232092'] }));
    });
};

/*
export const getSavedSubcategoryFromTicket = () => (dispatch, getState) => {
    const { ticket_id } = getState();

    if (!ticket_id) {
        return null;
    }

    ZAFClient.request(`/api/v2/tickets/${ticket_id}.json`).then(function (data) {
        const custom_fields = data.ticket.custom_fields;
        let saved_subcategory = null;

        custom_fields.forEach((field) => {
            if (field.id === 360016232092) {
                saved_subcategory = field.value;
            }
        });

        console.log('saving to state:', saved_category);

        dispatch(changeState({ saved_subcategory }));
    });
}
*/

export const getTicketId = () => (dispatch) => {
    ZAFClient.get('ticket.id').then(function (data) {
        dispatch(changeState({ ticket_id: data['ticket.id'] }));
    });
};

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

export const updateSubcategories = () => (dispatch) => {
    ZAFClient.request('/api/v2/ticket_fields/360016232092.json').then(function (data) {
        const subcategories = data.ticket_field.custom_field_options;
        subcategories.forEach((subcat) => subcat.categories = ['Account', 'Billing']);
        //console.log('subcategories', subcategories);
        dispatch(changeState({ subcategories, suggestions: subcategories }));
    });
}

export const resetStore = () => ({
    type: actions.RESET_STORE,
});

export const changeState = (payload) => ({
    type: actions.CHANGE_STATE,
    ...payload,
});