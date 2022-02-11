export const CHANGE_FIELD_MEMBER_FAMILY = 'CHANGE_FIELD_MEMBER_FAMILY';
export const changeFieldMemberFamily = (key, value) => ({
  type: CHANGE_FIELD_MEMBER_FAMILY,
  key,
  value,
});

export const ADD_MEMBER_FAMILY_IN_DB = 'ADD_MEMBER_FAMILY_IN_DB';
export const addMemberFamilyInDB = (newMemberFamily) => ({
  type: ADD_MEMBER_FAMILY_IN_DB,
  newMemberFamily,
});

export const RESET_MEMBER_FAMILY_FORM = 'RESET_MEMBER_FAMILY_FORM';
export const resetMemberFamilyForm = () => ({
  type: RESET_MEMBER_FAMILY_FORM,
});
