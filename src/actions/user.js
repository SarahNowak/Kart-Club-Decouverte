export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const GET_USER_DATA = 'GET_USER_DATA';
export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const STORE_USER_DATA = 'STORE_USER_DATA';
export const storeUserData = (data) => ({
  type: STORE_USER_DATA,
  data: data,
});

export const AUTOCONNECT = 'AUTOCONNECT';
export const autoconnect = () => ({
  type: AUTOCONNECT,
});
