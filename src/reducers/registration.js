import { CHANGE_FIELD_REGISTRATION, TOGGLE_LOADING_SUBMIT_STATUS, RESET_USER_REGISTRATION_FORM } from 'src/actions/registration';

export const initialState = {
  email: '',
  pseudo: '',
  password: '',
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_REGISTRATION:
      return {
        ...state,
        [action.key]: action.value,
      };
    case TOGGLE_LOADING_SUBMIT_STATUS:
      return {
        ...state,
        loading: !state.loading,
      };
    /* This action change the state when the second form is submitted and http request is
    successfull */
    case RESET_USER_REGISTRATION_FORM:
      return {
        email: '',
        pseudo: '',
        password: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
