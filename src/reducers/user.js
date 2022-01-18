import { LOGIN, LOGOUT, STORE_USER_DATA } from '../actions/user';

export const initialState = {
  id: null,
  pseudo: '',
  email: '',
  logged: false,
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
      };
    default:
      return state;
  }
};

export default reducer;
