import { combineReducers } from 'redux';

import settingsReducer from './settings';
import contactReducer from './contact';
import tripsReducer from './trips';
import searchTripsReducer from './searchTrips';

const rootReducer = combineReducers({
  settings: settingsReducer,
  contact: contactReducer,
  trips: tripsReducer,
  searchTrips: searchTripsReducer,
});

export default rootReducer;
