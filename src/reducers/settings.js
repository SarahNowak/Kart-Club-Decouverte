import { TOGGLE_BURGER_ISOPEN, SET_HTTP_ERROR_MESSAGE } from 'src/actions/settings';

export const initialState = {
  burgerIsOpen: false,
  httpErrorMessage: '',
  showHttpErrorMessage: false,
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
    default:
      return state;
  }
};

export default reducer;
