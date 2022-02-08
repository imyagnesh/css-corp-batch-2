import { CartType } from 'types/cartTypes';
import {
  AddCartItemActions,
  DeleteCartItemActions,
  LoadCartActions,
  LoadProductsActions,
  UpdateCartItemActions,
} from 'types/commonTypes';
import {
  AddCartItemRequestActionType,
  LoadRequestActionType,
  ModifyCartItemRequestActionType,
  RequestActionType,
} from './actionTypes';

export const LoadProductRequestAction = (): LoadRequestActionType => ({
  type: LoadProductsActions.LOAD_PRODUCTS_REQUEST,
});

export const LoadCartRequestAction = (): LoadRequestActionType => ({
  type: LoadCartActions.LOAD_CART_REQUEST,
});

export const AddCartItemRequestAction = (
  processId: number,
): AddCartItemRequestActionType => ({
  type: AddCartItemActions.ADD_CART_ITEM_REQUEST,
  processId,
});

export const UpdateCartItemRequestAction = (
  cartItem: CartType,
): ModifyCartItemRequestActionType => ({
  type: UpdateCartItemActions.UPDATE_CART_ITEM_REQUEST,
  cartItem,
  processId: cartItem.productId,
});

export const deleteCartItemRequestAction = (
  cartItem: CartType,
): ModifyCartItemRequestActionType => ({
  type: DeleteCartItemActions.DELETE_CART_ITEM_REQUEST,
  cartItem,
  processId: cartItem.productId,
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
