import { CartType } from 'types/cartTypes';
import { ProductInitialStateType } from './productReducer';

export type LoadProductSuccessAction = {
  type: 'LOAD_PRODUCTS_SUCCESS';
  data: Omit<ProductInitialStateType, 'loading'>;
  processId?: number;
  error?: never;
};

export type AddCartItemSuccess = {
  type:
    | 'ADD_CART_ITEM_SUCCESS'
    | 'UPDATE_CART_ITEM_SUCCESS'
    | 'DELETE_CART_ITEM_SUCCESS';
  cartItem: CartType;
  processId: number;
  error?: never;
};

export type RequestActionType = {
  type:
    | 'LOAD_PRODUCTS_REQUEST'
    | 'ADD_CART_ITEM_REQUEST'
    | 'UPDATE_CART_ITEM_REQUEST'
    | 'DELETE_CART_ITEM_REQUEST';
  processId: number;
  error?: never;
};

export type ErrorActionType = {
  type:
    | 'LOAD_PRODUCTS_FAIL'
    | 'ADD_CART_ITEM_FAIL'
    | 'UPDATE_CART_ITEM_FAIL'
    | 'DELETE_CART_ITEM_FAIL';
  processId: number;
  error: Error;
};
