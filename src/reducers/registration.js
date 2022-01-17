import { CHANGE_FIELD_REGISTRATION } from 'src/actions/registration';

const initialState = {
  email: '',
  pseudo: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_REGISTRATION:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
