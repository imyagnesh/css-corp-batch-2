import { combineReducers } from 'redux';
import error from './errorReducer';
import loading from './loadingReducer';
import products from './productsReducer';
import cart from './cartReducer';
import user from './userReducer';

const rootReducer = combineReducers({ error, loading, products, cart, user });

export default rootReducer;
