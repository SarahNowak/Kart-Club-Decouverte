import { combineReducers } from 'redux';

import settingsReducer from './settings';
import contactReducer from './contact';
import tripsReducer from './trips';
import searchTripsReducer from './searchTrips';
import formBecomeMemberReducer from './formBecomeMember';
import registrationReducer from './registration';
import loginReducer from './login';
import userReducer from './user';
import memberFamilyRegistrationReducer from './memberFamilyRegistration';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  contact: contactReducer,
  trips: tripsReducer,
  searchTrips: searchTripsReducer,
  formBecomeMember: formBecomeMemberReducer,
  registration: registrationReducer,
  login: loginReducer,
  user: userReducer,
  memberFamilyRegistration: memberFamilyRegistrationReducer,

});

export default rootReducer;
