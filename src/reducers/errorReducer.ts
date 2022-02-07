import { ErrorActions } from './actionTypes';

export const LoadProductErrorAction = (error: string): ErrorActions => ({
  type: 'LOAD_PRODUCTS_FAIL',
  error,
});

export const LoadCartErrorAction = (error: string): ErrorActions => ({
  type: 'LOAD_CART_FAIL',
  error,
});

export const AddCartItemFailAction = (
  error: string,
  processId: number,
): ErrorActions => ({
  type: 'ADD_CART_ITEM_FAIL',
  processId,
  error,
});

export const UpdateCartItemFailAction = (
  error: string,
  processId: number,
): ErrorActions => ({
  type: 'UPDATE_CART_ITEM_FAIL',
  processId,
  error,
});

export const DeleteCartItemFailAction = (
  error: string,
  processId: number,
): ErrorActions => ({
  type: 'DELETE_CART_ITEM_FAIL',
  processId,
  error,
});

export default (
  state: any = {},
  { type, error, processId, key }: ErrorActions,
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
