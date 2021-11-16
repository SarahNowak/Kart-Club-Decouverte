import { combineReducers } from 'redux';

import settingsReducer from './settings';
import contactReducer from './contact';
import tripsReducer from './trips';
import searchTripsReducer from './searchTrips';
import formBecomeMemberReducer from './formBecomeMember';

const rootReducer = combineReducers({
  settings: settingsReducer,
  contact: contactReducer,
  trips: tripsReducer,
  searchTrips: searchTripsReducer,
  formBecomeMember: formBecomeMemberReducer,
});

export default rootReducer;
