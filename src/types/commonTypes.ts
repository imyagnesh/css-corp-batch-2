import rootReducer from 'reducers';
import store from '../configureStore';

export enum GenderEnum {
  male = 'male',
  female = 'female',
  other = 'other',
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST';
export type LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export type LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL';

export type LOAD_CART_REQUEST = 'LOAD_CART_REQUEST';
export type LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
export type LOAD_CART_FAIL = 'LOAD_CART_FAIL';

export type ADD_CART_ITEM_REQUEST = 'ADD_CART_ITEM_REQUEST';
export type ADD_CART_ITEM_SUCCESS = 'ADD_CART_ITEM_SUCCESS';
export type ADD_CART_ITEM_FAIL = 'ADD_CART_ITEM_FAIL';

export type UPDATE_CART_ITEM_REQUEST = 'UPDATE_CART_ITEM_REQUEST';
export type UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
export type UPDATE_CART_ITEM_FAIL = 'UPDATE_CART_ITEM_FAIL';

export type DELETE_CART_ITEM_REQUEST = 'DELETE_CART_ITEM_REQUEST';
export type DELETE_CART_ITEM_SUCCESS = 'DELETE_CART_ITEM_SUCCESS';
export type DELETE_CART_ITEM_FAIL = 'DELETE_CART_ITEM_FAIL';

export type LOGIN_REQUEST = 'LOGIN_REQUEST';
export type LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_FAIL = 'LOGIN_FAIL';

export type REGISTER_REQUEST = 'REGISTER_REQUEST';
export type REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export type REGISTER_FAIL = 'REGISTER_FAIL';

export type CLEAR_ERROR = 'CLEAR_ERROR';

export type LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export type LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export type LOGOUT_FAIL = 'LOGIN_FAIL';
