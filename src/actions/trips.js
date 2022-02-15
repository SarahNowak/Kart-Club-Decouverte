export const STORE_LIST_OF_TRIPS = 'STORE_LIST_OF_TRIPS';
export const storeListOfTrips = (list) => ({
  type: STORE_LIST_OF_TRIPS,
  list: list,
});

export const CHANGE_VALUE_IN_TRIPSFORM = 'CHANGE_VALUE_IN_TRIPSFORM ';
export const changeValueInTripsForm = (key, value) => ({
  type: CHANGE_VALUE_IN_TRIPSFORM,
  key: key,
  value: value,
});

export const GET_TRIPS_FROM_API = 'GET_TRIPS_FROM_API';
export const getTripsFromAPI = () => ({
  type: GET_TRIPS_FROM_API,
});

export const TOGGLE_LOADING_TRIPS_STATUS = 'TOGGLE_LOADING_TRIPS_STATUS';
export const toggleLoadingTripsStatus = () => ({
  type: TOGGLE_LOADING_TRIPS_STATUS,
});
