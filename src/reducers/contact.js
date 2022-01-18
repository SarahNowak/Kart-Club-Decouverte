import { CHANGE_FIELD, RESET_FORM, VERIFIED_RECAPTCHA } from '../actions/contact';

export const initialState = {
  emailContact: '',
  lastNameContact: '',
  firstNameContact: '',
  messageContact: '',
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
    case VERIFIED_RECAPTCHA:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
