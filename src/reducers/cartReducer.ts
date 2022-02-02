import { CartType } from 'types/cartTypes';
import { CartItemSuccess, LoadCartSuccessAction } from './actionTypes';

const cartInitialState: CartType[] = [];

export default (
  state: CartType[] = cartInitialState,
  action: LoadCartSuccessAction | CartItemSuccess,
) => {
  switch (action.type) {
    case 'LOAD_CART_SUCCESS':
      return action.data;

    case 'ADD_CART_ITEM_SUCCESS':
      return [...state, action.cartItem];

    case 'UPDATE_CART_ITEM_SUCCESS':
      return state.map((item) => {
        if (item.id === action.cartItem.id) {
          return action.cartItem;
        }
        return item;
      });

    case 'DELETE_CART_ITEM_SUCCESS':
      return state.filter((item) => item.id !== action.cartItem.id);

    default:
      return state;
  }
};
