export const TOGGLE_BURGER_ISOPEN = 'TOGGLE_BURGER_ISOPEN';
export const toggleBurgerIsOpen = () => ({
  type: TOGGLE_BURGER_ISOPEN,
});

export const SET_HTTP_ERROR_MESSAGE = 'STORE_HTTP_ERROR_MESSAGE';
export const setHttpErrorMessage = (showMessage, httpErrorMessage) => ({
  type: SET_HTTP_ERROR_MESSAGE,
  showMessage,
  httpErrorMessage,
});
