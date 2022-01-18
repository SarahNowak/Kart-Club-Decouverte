export const CHANGE_FIELD_REGISTRATION = 'CHANGE_FIELD_REGISTRATION';
export const changeFieldRegistration = (key, value) => ({
  type: CHANGE_FIELD_REGISTRATION,
  key,
  value,
});

export const CREATE_USER_IN_DB = 'CREATE_USER_IN_DB';
export const createUserInDB = (pseudo, email, password) => ({
  type: CREATE_USER_IN_DB,
  pseudo,
  email,
  password,
});

export const RESET_USER_REGISTRATION_FORM = 'RESET_USER_REGISTRATION_FORM';
export const resetUserRegistrationForm = () => ({
  type: RESET_USER_REGISTRATION_FORM,
});

export const TOGGLE_LOADING_SUBMIT_STATUS = 'TOGGLE_LOADING_SUBMIT_STATUS';
export const toggleLoadingSubmitStatus = () => ({
  type: TOGGLE_LOADING_SUBMIT_STATUS,
});
