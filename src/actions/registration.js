export const CHANGE_FIELD_REGISTRATION = 'CHANGE_FIELD_REGISTRATION';

export const changeFieldRegistration = (key, value) => ({
  type: CHANGE_FIELD_REGISTRATION,
  key,
  value,
});
