import { combineReducers } from 'redux';
import error from './errorReducer';
import loading from './loadingReducer';
import products from './productsReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({ error, loading, products, cart });

export default rootReducer;
