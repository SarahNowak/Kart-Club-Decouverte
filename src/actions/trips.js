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
