export const CHANGE_FIELD_LOGIN = 'CHANGE_FIELD_LOGIN';
export const changeFieldLogin = (key, value) => ({
  type: CHANGE_FIELD_LOGIN,
  key,
  value,
});

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (email, password) => ({
  type: CONNECT_USER,
  email: email,
  password: password,
});

export const RESET_USER_LOGIN_FORM = 'RESET_USER_LOGIN_FORM';
export const resetUserLoginForm = () => ({
  type: RESET_USER_LOGIN_FORM,
});
