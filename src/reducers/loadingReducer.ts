import { CartType } from 'types/cartTypes';
import { LoadingActions, RequestActionType } from './actionTypes';

export const LoadProductRequestAction = (): LoadingActions => ({
  type: 'LOAD_PRODUCTS_REQUEST',
});

export const LoadCartRequestAction = (): LoadingActions => ({
  type: 'LOAD_CART_REQUEST',
});

export const AddCartItemRequestAction = (
  processId: number,
): RequestActionType => ({
  type: 'ADD_CART_ITEM_REQUEST',
  processId,
});

export const UpdateCartItemRequestAction = (
  cartItem: CartType,
  processId: number,
): RequestActionType => ({
  type: 'UPDATE_CART_ITEM_REQUEST',
  cartItem,
  processId,
});

export const deleteCartItemRequestAction = (
  cartItem: CartType,
  processId: number,
): RequestActionType => ({
  type: 'DELETE_CART_ITEM_REQUEST',
  cartItem,
  processId,
});

export default (state: any = {}, { type, processId }: RequestActionType) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) return state;

  const id = processId ? `_${processId}` : '';

  if (matches[2] === 'REQUEST') {
    return { ...state, [`${matches[1]}${id}`]: true };
  }

  const { [`${matches[1]}${id}`]: data, ...loading } = state;

  return loading;
};
