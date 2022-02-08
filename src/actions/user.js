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
  data,
});

export const AUTOCONNECT = 'AUTOCONNECT';
export const autoconnect = () => ({
  type: AUTOCONNECT,
});

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const EDIT_USER_IN_DB = 'EDIT_USER_IN_DB';
export const editUserInDB = (editedUser) => ({
  type: EDIT_USER_IN_DB,
  editedUser,
});

export const STORE_DATA_BEFORE_EDIT = 'STORE_DATA_BEFORE_EDIT';
export const storeDataBeforeEdit = (userToEdit) => ({
  type: STORE_DATA_BEFORE_EDIT,
  userId: userToEdit.id,
  userLastName: userToEdit.lastName,
  userFirstName: userToEdit.firstName,
  userAdress: userToEdit.adress,
  userPostalCode: userToEdit.postalCode,
  userCity: userToEdit.city,
  userNumber: userToEdit.number,
  userEmail: userToEdit.email,
  userLicense: userToEdit.license,
});
