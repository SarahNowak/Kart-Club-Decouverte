import { CHANGE_FIELD_LOGIN, RESET_USER_LOGIN_FORM } from '../actions/login';

export const initialState = {
  email: '',
  password: '',
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_LOGIN:
      return {
        ...state,
        [action.key]: action.value,
      };
    /* This action change the state when the second form is submitted and http request is
    successfull */
    case RESET_USER_LOGIN_FORM:
      return {
        email: '',
        password: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
