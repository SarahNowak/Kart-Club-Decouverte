export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (key, value) => ({
  type: CHANGE_FIELD,
  key,
  value,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const VERIFIED_RECAPTCHA = 'VERIFIED_RECAPTCHA';
export const verifiedRecaptcha = (key, value) => ({
  type: VERIFIED_RECAPTCHA,
  key,
  value,
});
