import { CHANGE_FIELD, RESET_FORM, CHANGE_PHOTO_MEMBER } from '../actions/formBecomeMember';

export const initialState = {
  lastNameBecomeMember: '',
  firstNameBecomeMember: '',
  adressBecomeMember: '',
  postalCodeBecomeMember: '',
  cityBecomeMember: '',
  emailBecomeMember: '',
  numberBecomeMember: '',
  dateOfBirthBecomeMember: '',
  photoMemberBecomeMember: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CHANGE_PHOTO_MEMBER:
      return {
        ...state,
        photoMember: action.picture,
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
