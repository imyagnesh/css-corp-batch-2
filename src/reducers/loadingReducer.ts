import { CartType } from 'types/cartTypes';

import {
  AddCartItemRequestActionType,
  LoadRequestActionType,
  LoginRequestActionType,
  LogoutRequestActionType,
  ModifyCartItemRequestActionType,
  RegisterRequestActionType,
} from './actionTypes';
import { LoginInitValuesType } from '../Pages/Login/loginUtils';
import { FormikHelpers } from 'formik';
import {
  ADD_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_REQUEST,
  LOAD_CART_REQUEST,
  LOAD_PRODUCTS_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  UPDATE_CART_ITEM_REQUEST,
} from 'constants/actionTypes';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';

export const LoadProductRequestAction = (): LoadRequestActionType => ({
  type: LOAD_PRODUCTS_REQUEST,
});

export const LoadCartRequestAction = (): LoadRequestActionType => ({
  type: LOAD_CART_REQUEST,
});

export const AddCartItemRequestAction = (
  processId: number,
): AddCartItemRequestActionType => ({
  type: ADD_CART_ITEM_REQUEST,
  processId,
});

export const UpdateCartItemRequestAction = (
  cartItem: CartType,
): ModifyCartItemRequestActionType => ({
  type: UPDATE_CART_ITEM_REQUEST,
  cartItem,
  processId: cartItem.productId,
});

export const deleteCartItemRequestAction = (
  cartItem: CartType,
): ModifyCartItemRequestActionType => ({
  type: DELETE_CART_ITEM_REQUEST,
  cartItem,
  processId: cartItem.productId,
});

export const loginRequestAction = (
  values: LoginInitValuesType,
  actions: FormikHelpers<LoginInitValuesType>,
): LoginRequestActionType => ({
  type: LOGIN_REQUEST,
  values,
  actions,
});

export const registerRequestAction = (
  values: RegisterInitValuesType,
  actions: FormikHelpers<RegisterInitValuesType>,
): RegisterRequestActionType => ({
  type: REGISTER_REQUEST,
  values,
  actions,
});

export const logoutRequestAction = (): LogoutRequestActionType => ({
  type: LOGOUT_REQUEST,
});

type LoadingActionType =
  | AddCartItemRequestActionType
  | LoadRequestActionType
  | LoginRequestActionType
  | RegisterRequestActionType
  | ModifyCartItemRequestActionType
  | LogoutRequestActionType;

export default (state: any = {}, { type, processId }: LoadingActionType) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) return state;

  const id = processId ? `_${processId}` : '';

  if (matches[2] === 'REQUEST') {
    return { ...state, [`${matches[1]}${id}`]: true };
  }

  const { [`${matches[1]}${id}`]: data, ...loading } = state;

  return loading;
};
