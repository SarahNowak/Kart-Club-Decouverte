import { STORE_LIST_OF_TRIPS, TOGGLE_LOADING_TRIPS_STATUS } from 'src/actions/trips';

export const initialState = {
  loading: false,
  listOfTrips: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_LIST_OF_TRIPS:
      return {
        ...state,
        listOfTrips: action.list,
      };
    case TOGGLE_LOADING_TRIPS_STATUS:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default reducer;
