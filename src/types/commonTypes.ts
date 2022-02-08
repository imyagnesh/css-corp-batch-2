import rootReducer from 'reducers/rootReducer';
import store from '../configureStore';

export enum GenderEnum {
  male = 'male',
  female = 'female',
  other = 'other',
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export enum LoadProductsActions {
  LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST',
  LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL',
}

export enum LoadCartActions {
  LOAD_CART_REQUEST = 'LOAD_CART_REQUEST',
  LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS',
  LOAD_CART_FAIL = 'LOAD_CART_FAIL',
}

export enum AddCartItemActions {
  ADD_CART_ITEM_REQUEST = 'ADD_CART_ITEM_REQUEST',
  ADD_CART_ITEM_SUCCESS = 'ADD_CART_ITEM_SUCCESS',
  ADD_CART_ITEM_FAIL = 'ADD_CART_ITEM_FAIL',
}

export enum UpdateCartItemActions {
  UPDATE_CART_ITEM_REQUEST = 'UPDATE_CART_ITEM_REQUEST',
  UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS',
  UPDATE_CART_ITEM_FAIL = 'UPDATE_CART_ITEM_FAIL',
}

export enum DeleteCartItemActions {
  DELETE_CART_ITEM_REQUEST = 'DELETE_CART_ITEM_REQUEST',
  DELETE_CART_ITEM_SUCCESS = 'DELETE_CART_ITEM_SUCCESS',
  DELETE_CART_ITEM_FAIL = 'DELETE_CART_ITEM_FAIL',
}

export enum LoginActions {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
}

export enum RegisterActions {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
}
