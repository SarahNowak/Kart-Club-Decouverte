import datas from 'src/trips';
import { STORE_LIST_OF_TRIPS } from 'src/actions/trips';

export const initialState = {
  listOfTrips: datas,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_LIST_OF_TRIPS:
      return {
        ...state,
        listOfTrips: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
