import { TOGGLE_BURGER_ISOPEN } from 'src/actions/settings';

export const initialState = {
  burgerIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER_ISOPEN:
      return {
        ...state,
        burgerIsOpen: !state.burgerIsOpen,
      };
    default:
      return state;
  }
};

export default reducer;
