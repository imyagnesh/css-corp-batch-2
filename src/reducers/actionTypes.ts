import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

export type LoadProductSuccessAction = {
  type: 'LOAD_PRODUCTS_SUCCESS';
  data: ProductType[];
  processId?: number;
};

export type LoadCartSuccessAction = {
  type: 'LOAD_CART_SUCCESS';
  data: CartType[];
  processId?: number;
};

export type CartItemSuccess = {
  type:
    | 'ADD_CART_ITEM_SUCCESS'
    | 'UPDATE_CART_ITEM_SUCCESS'
    | 'DELETE_CART_ITEM_SUCCESS';
  cartItem: CartType;
  processId: number;
};

export type RequestActionType = {
  type:
    | 'LOAD_PRODUCTS_REQUEST'
    | 'LOAD_CART_REQUEST'
    | 'ADD_CART_ITEM_REQUEST'
    | 'UPDATE_CART_ITEM_REQUEST'
    | 'DELETE_CART_ITEM_REQUEST';
  processId?: number;
};

export type BaseErrorActionType = {
  type:
    | 'LOAD_PRODUCTS_FAIL'
    | 'LOAD_CART_FAIL'
    | 'ADD_CART_ITEM_FAIL'
    | 'UPDATE_CART_ITEM_FAIL'
    | 'DELETE_CART_ITEM_FAIL';
  processId?: number;
  error: string;
};

export type ClearErrorAction = {
  type: 'CLEAR_ERROR';
  key: string;
  error: string;
};

export type ErrorActionType = BaseErrorActionType | ClearErrorAction;
