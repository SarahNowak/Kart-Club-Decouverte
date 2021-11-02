import datas from 'src/trips';

export const initialState = {
  list: datas,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
