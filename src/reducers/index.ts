import { combineReducers } from 'redux';
import error from './errorReducer';
import loading from './loadingReducer';
import products from './productsReducer';
import cart from './cartReducer';

export default combineReducers({ error, loading, products, cart });
