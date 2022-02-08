import {
  CHANGE_FIELD,
  LOGIN,
  LOGOUT,
  STORE_DATA_BEFORE_EDIT,
  STORE_USER_DATA,
} from '../actions/user';

export const initialState = {
  id: null,
  logged: false,
  pseudo: '',
  email: '',
  lastName: '',
  firstName: '',
  adress: '',
  postalCode: '',
  city: '',
  number: '',
  license: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // This action change the state when user is successfully logged in
    case LOGIN:
      return {
        ...state,
        logged: true,
      };
    // This action change the state when user is logged off
    case LOGOUT:
      return {
        ...state,
        id: null,
        pseudo: '',
        email: '',
        logged: false,
      };
    // This action change the state when the user data is collected from the api
    case STORE_USER_DATA:
      return {
        ...state,
        id: action.data.id,
        pseudo: action.data.pseudo,
        email: action.data.email,
        lastName: action.data.lastName,
        firstName: action.data.firstName,
        adress: action.data.adress,
        postalCode: action.data.postalCode,
        city: action.data.city,
        number: action.data.number,
        license: action.data.license,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case STORE_DATA_BEFORE_EDIT:
      return {
        ...state,
        id: action.userId,
        lastName: action.userLastName,
        firstName: action.userFirstName,
        adress: action.userAdress,
        postalCode: action.userPostalCode,
        city: action.userCity,
        number: action.userNumber,
        email: action.userEmail,
        license: action.userLicense,
      };
    default:
      return state;
  }
};

export default reducer;
