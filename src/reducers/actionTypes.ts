import { FormikHelpers } from 'formik';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { CartType } from 'types/cartTypes';
import {
  AddCartItemActions,
  DeleteCartItemActions,
  LoadCartActions,
  LoadProductsActions,
  LoginActions,
  UpdateCartItemActions,
} from 'types/commonTypes';
import { ProductType } from 'types/productsTypes';
import { User } from 'types/UserType';

export type LoadProductSuccessActionType = {
  type: LoadProductsActions.LOAD_PRODUCTS_SUCCESS;
  data: ProductType[];
  processId?: never;
};

export type LoadCartSuccessActionType = {
  type: LoadCartActions.LOAD_CART_SUCCESS;
  data: CartType[];
  processId?: never;
};

export type CartItemSuccess = {
  type:
    | AddCartItemActions.ADD_CART_ITEM_SUCCESS
    | UpdateCartItemActions.UPDATE_CART_ITEM_SUCCESS
    | DeleteCartItemActions.DELETE_CART_ITEM_SUCCESS;
  cartItem: CartType;
  processId: number;
};

export type LoadRequestActionType = {
  type:
    | LoadProductsActions.LOAD_PRODUCTS_REQUEST
    | LoadCartActions.LOAD_CART_REQUEST;
  processId?: never;
  cartItem?: never;
};

export type AddCartItemRequestActionType = {
  type: AddCartItemActions.ADD_CART_ITEM_REQUEST;
  processId: number;
  cartItem?: never;
};

export type ModifyCartItemRequestActionType = {
  type:
    | UpdateCartItemActions.UPDATE_CART_ITEM_REQUEST
    | DeleteCartItemActions.DELETE_CART_ITEM_REQUEST;
  cartItem: CartType;
  processId: number;
};

export type loginRequestActionType = {
  type: LoginActions.LOGIN_REQUEST;
  values: LoginInitValuesType;
  actions: FormikHelpers<LoginInitValuesType>;
  processId?: never;
};

export type loginSuccessActionType = {
  type: LoginActions.LOGIN_SUCCESS;
  user: User;
};

export type RequestActionType =
  | LoadRequestActionType
  | AddCartItemRequestActionType
  | ModifyCartItemRequestActionType
  | loginRequestActionType;

export type LoadErrorActionType = {
  type:
    | LoadProductsActions.LOAD_PRODUCTS_FAIL
    | LoadCartActions.LOAD_CART_FAIL
    | LoginActions.LOGIN_FAIL;
  error: string;
  processId?: never;
  key?: never;
};

export type ModifyCartErrorActionType = {
  type:
    | AddCartItemActions.ADD_CART_ITEM_FAIL
    | UpdateCartItemActions.UPDATE_CART_ITEM_FAIL
    | DeleteCartItemActions.DELETE_CART_ITEM_FAIL;
  processId: number;
  error: string;
  key?: never;
};

export type BaseErrorActionType = {
  type:
    | LoadProductsActions.LOAD_PRODUCTS_FAIL
    | LoadCartActions.LOAD_CART_FAIL
    | AddCartItemActions.ADD_CART_ITEM_FAIL
    | UpdateCartItemActions.UPDATE_CART_ITEM_FAIL
    | DeleteCartItemActions.DELETE_CART_ITEM_FAIL;
  processId?: number;
  error: string;
  key?: never;
};

export type ClearErrorAction = {
  type: 'CLEAR_ERROR';
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
