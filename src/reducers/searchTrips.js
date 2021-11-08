import { CHANGE_VALUE_IN_TRIPSFORM } from 'src/actions/trips';

export const initialState = {
  searchForm: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_IN_TRIPSFORM:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
