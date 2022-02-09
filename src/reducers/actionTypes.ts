import { FormikHelpers } from 'formik';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import { CartType } from 'types/cartTypes';
import {
  ADD_CART_ITEM_FAIL,
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  CLEAR_ERROR,
  DELETE_CART_ITEM_FAIL,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  LOAD_CART_FAIL,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_CART_ITEM_FAIL,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from 'types/commonTypes';

import { ProductType } from 'types/productsTypes';
import { User } from 'types/UserType';

export type LogoutRequestActionType = {
  type: LOGOUT_REQUEST;
  processId?: never;
};

export type LoadProductSuccessActionType = {
  type: LOAD_PRODUCTS_SUCCESS;
  data: ProductType[];
  processId?: never;
};

export type LoadCartSuccessActionType = {
  type: LOAD_CART_SUCCESS;
  data: CartType[];
  processId?: never;
};

export type CartItemSuccess = {
  type:
    | ADD_CART_ITEM_SUCCESS
    | UPDATE_CART_ITEM_SUCCESS
    | DELETE_CART_ITEM_SUCCESS;
  cartItem: CartType;
  processId: number;
};

export type LoadRequestActionType = {
  type: LOAD_PRODUCTS_REQUEST | LOAD_CART_REQUEST;
  processId?: never;
  cartItem?: never;
};

export type AddCartItemRequestActionType = {
  type: ADD_CART_ITEM_REQUEST;
  processId: number;
  cartItem?: never;
};

export type ModifyCartItemRequestActionType = {
  type: UPDATE_CART_ITEM_REQUEST | DELETE_CART_ITEM_REQUEST;
  cartItem: CartType;
  processId: number;
};

export type LoginRequestActionType = {
  type: LOGIN_REQUEST;
  values: LoginInitValuesType;
  actions: FormikHelpers<LoginInitValuesType>;
  processId?: never;
};

export type RegisterRequestActionType = {
  type: REGISTER_REQUEST;
  values: RegisterInitValuesType;
  actions: FormikHelpers<RegisterInitValuesType>;
  processId?: never;
};

export type AuthSuccessActionType = {
  type: LOGIN_SUCCESS | REGISTER_SUCCESS;
  user: User;
};

export type LogoutSuccessActionType = {
  type: LOGOUT_SUCCESS;
  user?: never;
};

export type RequestActionType =
  | LoadRequestActionType
  | AddCartItemRequestActionType
  | ModifyCartItemRequestActionType
  | LoginRequestActionType;

export type LoadErrorActionType = {
  type:
    | LOAD_PRODUCTS_FAIL
    | LOAD_CART_FAIL
    | LOGIN_FAIL
    | REGISTER_FAIL
    | LOGOUT_FAIL;
  error: string;
  processId?: never;
  key?: never;
};

export type ModifyCartErrorActionType = {
  type: ADD_CART_ITEM_FAIL | UPDATE_CART_ITEM_FAIL | DELETE_CART_ITEM_FAIL;
  processId: number;
  error: string;
  key?: never;
};

export type BaseErrorActionType = {
  type:
    | LOAD_PRODUCTS_FAIL
    | LOAD_CART_FAIL
    | ADD_CART_ITEM_FAIL
    | UPDATE_CART_ITEM_FAIL
    | DELETE_CART_ITEM_FAIL;
  processId?: number;
  error: string;
  key?: never;
};

export type ClearErrorAction = {
  type: CLEAR_ERROR;
  key: string;
  processId?: never;
  error?: never;
};

export type ErrorActionType = BaseErrorActionType | ClearErrorAction;

export type LoadingActions =
  | RequestActionType
  | LoadProductSuccessActionType
  | LoadCartSuccessActionType
  | CartItemSuccess
  | BaseErrorActionType;

export type ErrorActions =
  | LoadErrorActionType
  | ModifyCartErrorActionType
  | ClearErrorAction;
