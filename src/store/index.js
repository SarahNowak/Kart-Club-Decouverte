import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import ajax from 'src/middlewares/ajax';

const middlewares = applyMiddleware(ajax);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
