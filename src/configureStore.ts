import loggerMiddleware from 'middleware/logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const middleware = [thunk, loggerMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
