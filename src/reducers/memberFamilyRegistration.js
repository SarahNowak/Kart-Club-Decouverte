import { CHANGE_FIELD_MEMBER_FAMILY, RESET_MEMBER_FAMILY_FORM } from '../actions/memberFamilyRegistration';

export const initialState = {
  firstName: '',
  lastName: '',
  license: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_MEMBER_FAMILY:
      return {
        ...state,
        [action.key]: action.value,
      };
    case RESET_MEMBER_FAMILY_FORM:
      return {
        firstName: '',
        lastName: '',
        license: '',
      };
    default:
      return state;
  }
};

export default reducer;
