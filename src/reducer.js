import { actions } from './actions';

const initialState = {
  subcategories: [],
  value: '',
  suggestions: [],
  category: '',
  subcategory: '',
  groups: [],
  ticketStatus: null,
  ticketId: null,
  savedSubcategory: '',
  loading: true,
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

export default reducer;
