import { actions } from './actions';

const initialState = {
  groups: [],
  categories: [],
  subcategories: [],
  allSubcategories: [],
  category: '',
  subcategory: '',
  savedSubcategory: '',
  ticketStatus: null,
  ticketId: null,
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
