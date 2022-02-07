import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

export type LoadProductSuccessActionType = {
  type: 'LOAD_PRODUCTS_SUCCESS';
  data: ProductType[];
  processId?: number;
};

export type LoadCartSuccessActionType = {
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

type LoadRequestActionType = {
  type: 'LOAD_PRODUCTS_REQUEST' | 'LOAD_CART_REQUEST';
  processId?: never;
  cartItem?: never;
};

type AddCartItemRequestActionType = {
  type: 'ADD_CART_ITEM_REQUEST';
  processId: number;
  cartItem?: never;
};

type ModifyCartItemRequestActionType = {
  type: 'UPDATE_CART_ITEM_REQUEST' | 'DELETE_CART_ITEM_REQUEST';
  cartItem: CartType;
  processId: number;
};

export type RequestActionType =
  | LoadRequestActionType
  | AddCartItemRequestActionType
  | ModifyCartItemRequestActionType;

export type BaseErrorActionType = {
  type:
    | 'LOAD_PRODUCTS_FAIL'
    | 'LOAD_CART_FAIL'
    | 'ADD_CART_ITEM_FAIL'
    | 'UPDATE_CART_ITEM_FAIL'
    | 'DELETE_CART_ITEM_FAIL';
  processId?: number;
  error: string;
  key?: never;
};

export type ClearErrorAction = {
  type: 'CLEAR_ERROR';
  processId?: never;
  key: string;
  error: string;
};

export type ErrorActionType = BaseErrorActionType | ClearErrorAction;

export type LoadingActions =
  | RequestActionType
  | LoadProductSuccessActionType
  | LoadCartSuccessActionType
  | CartItemSuccess
  | BaseErrorActionType;

export type ErrorActions =
  | RequestActionType
  | BaseErrorActionType
  | ClearErrorAction;
