import { CHANGE_FIELD, RESET_FORM } from '../actions/contact';

const initialState = {
  email: '',
  lastName: '',
  firstName: '',
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case RESET_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
