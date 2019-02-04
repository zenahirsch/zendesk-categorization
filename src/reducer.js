import { actions } from './actions';

const initialState = {
    subcategories: [],
    value: '',
    suggestions: [],
    category: '',
    subcategory: '',
    groups: [],
    ticket_status: null,
    ticket_id: null,
    saved_subcategory: '',
    subcat_field_value: '',
    loading: true,
};

const rootReducer = (state = initialState, action) => {

    if (action.type === actions.RESET_STORE) {
        state = undefined
    }

    return reducer(state, action)
};

const reducer = (state = initialState, action) => {

    if (action.type === actions.CHANGE_STATE) {
        return {
            ...state,
            ...action,
        };
    }

    return state;

};

export default rootReducer;
