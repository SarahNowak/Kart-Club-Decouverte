import { combineReducers } from 'redux';

import settingsReducer from './settings';
import contactReducer from './contact';
import tripsReducer from './trips';

const rootReducer = combineReducers({
  settings: settingsReducer,
  contact: contactReducer,
  trips: tripsReducer,
});

export default rootReducer;
