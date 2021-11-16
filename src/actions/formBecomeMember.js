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
export const CHANGE_PHOTO_MEMBER = 'CHANGE_PHOTO_MEMBER';
export const changePhotoMember = (picture) => ({
  type: CHANGE_PHOTO_MEMBER,
  picture,
});
