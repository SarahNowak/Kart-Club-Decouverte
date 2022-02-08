import { TOGGLE_BURGER_ISOPEN, SET_HTTP_ERROR_MESSAGE, SET_SHOW_CONFIRMATION_MESSAGE } from 'src/actions/settings';

export const initialState = {
  burgerIsOpen: false,
  httpErrorMessage: '',
  showHttpErrorMessage: false,
  showConfirmationMessage: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER_ISOPEN:
      return {
        ...state,
        burgerIsOpen: !state.burgerIsOpen,
      };
    case SET_HTTP_ERROR_MESSAGE:
      return {
        ...state,
        showHttpErrorMessage: action.showMessage,
        httpErrorMessage: action.httpErrorMessage,
      };
    case SET_SHOW_CONFIRMATION_MESSAGE:
      return {
        ...state,
        showConfirmationMessage: action.bool,
      };
    default:
      return state;
  }
};

export default reducer;
