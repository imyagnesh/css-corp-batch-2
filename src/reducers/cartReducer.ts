import { CartType } from 'types/cartTypes';
import {
  AddCartItemActions,
  DeleteCartItemActions,
  LoadCartActions,
  UpdateCartItemActions,
} from 'types/commonTypes';
import { CartItemSuccess, LoadCartSuccessActionType } from './actionTypes';

const cartInitialState: CartType[] = [];

export const LoadCartSuccessAction = (
  data: CartType[],
): LoadCartSuccessActionType => ({
  type: LoadCartActions.LOAD_CART_SUCCESS,
  data,
});

export const AddCartItemSuccessAction = (
  cartItem: CartType,
  processId: number,
): CartItemSuccess => ({
  type: AddCartItemActions.ADD_CART_ITEM_SUCCESS,
  cartItem,
  processId,
});

export const UpdateCartItemSuccessAction = (
  cartItem: CartType,
  processId: number,
): CartItemSuccess => ({
  type: UpdateCartItemActions.UPDATE_CART_ITEM_SUCCESS,
  cartItem,
  processId,
});

export const DeleteCartItemSuccessAction = (
  cartItem: CartType,
  processId: number,
): CartItemSuccess => ({
  type: DeleteCartItemActions.DELETE_CART_ITEM_SUCCESS,
  cartItem,
  processId,
});

export default (
  state: CartType[] = cartInitialState,
  action: LoadCartSuccessActionType | CartItemSuccess,
) => {
  switch (action.type) {
    case LoadCartActions.LOAD_CART_SUCCESS:
      return action.data;

    case AddCartItemActions.ADD_CART_ITEM_SUCCESS:
      return [...state, action.cartItem];

    case UpdateCartItemActions.UPDATE_CART_ITEM_SUCCESS:
      return state.map((item) => {
        if (item.id === action.cartItem.id) {
          return action.cartItem;
        }
        return item;
      });

    case DeleteCartItemActions.DELETE_CART_ITEM_SUCCESS:
      return state.filter((item) => item.id !== action.cartItem.id);

    default:
      return state;
  }
};
