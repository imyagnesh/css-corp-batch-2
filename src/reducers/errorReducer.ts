import {
  ADD_CART_ITEM_FAIL,
  CLEAR_ERROR,
  DELETE_CART_ITEM_FAIL,
  LOAD_CART_FAIL,
  LOAD_PRODUCTS_FAIL,
  LOGIN_FAIL,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  REGISTER_FAIL,
  UPDATE_CART_ITEM_FAIL,
} from 'constants/actionTypes';
import {
  ClearErrorAction,
  LoadErrorActionType,
  ModifyCartErrorActionType,
} from './actionTypes';

export const LoadProductErrorAction = (error: string): LoadErrorActionType => ({
  type: LOAD_PRODUCTS_FAIL,
  error,
});

export const LoadCartErrorAction = (error: string): LoadErrorActionType => ({
  type: LOAD_CART_FAIL,
  error,
});

export const LoginFailAction = (error: string): LoadErrorActionType => ({
  type: LOGIN_FAIL,
  error,
});

export const registerFailAction = (error: string): LoadErrorActionType => ({
  type: REGISTER_FAIL,
  error,
});

export const logoutFailAction = (error: string): LoadErrorActionType => ({
  type: LOGOUT_FAIL,
  error,
});

export const AddCartItemFailAction = (
  error: string,
  processId: number,
): ModifyCartErrorActionType => ({
  type: ADD_CART_ITEM_FAIL,
  processId,
  error,
});

export const UpdateCartItemFailAction = (
  error: string,
  processId: number,
): ModifyCartErrorActionType => ({
  type: UPDATE_CART_ITEM_FAIL,
  processId,
  error,
});

export const DeleteCartItemFailAction = (
  error: string,
  processId: number,
): ModifyCartErrorActionType => ({
  type: DELETE_CART_ITEM_FAIL,
  processId,
  error,
});

export const ClearError = (key: string): ClearErrorAction => ({
  type: CLEAR_ERROR,
  key,
});

type ErrorActionType =
  | LoadErrorActionType
  | ModifyCartErrorActionType
  | ClearErrorAction;

export default (
  state: any = {},
  { type, error, processId, key }: ErrorActionType,
) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (matches) {
    const id = processId ? `_${processId}` : '';

    if (matches[2] === 'FAIL') {
      return { ...state, [`${matches[1]}${id}`]: error };
    }

    const { [`${matches[1]}${id}`]: data, ...loading } = state;

    return loading;
  } else if (type === 'CLEAR_ERROR') {
    const { [`${key}`]: data, ...loading } = state;
    return loading;
  } else {
    return state;
  }
};
