import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import ajax from 'src/middlewares/ajax';
import app from 'src/middlewares/app';

const middlewares = applyMiddleware(ajax, app);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
