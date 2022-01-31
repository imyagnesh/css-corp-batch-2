import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';
import { AddCartItemSuccess, LoadProductSuccessAction } from './actionTypes';

export type ProductInitialStateType = {
  products: ProductType[];
  cart: CartType[];
};

export const productInitialState: ProductInitialStateType = {
  products: [],
  cart: [],
};

export type ProductActions = LoadProductSuccessAction | AddCartItemSuccess;

export default (state: ProductInitialStateType, action: ProductActions) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);

  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS': {
      return { ...state, ...action.data };
    }

    case 'ADD_CART_ITEM_SUCCESS':
      return {
        ...state,
        cart: [...state.cart, action.cartItem],
      };

    case 'UPDATE_CART_ITEM_SUCCESS':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.cartItem.id) {
            return action.cartItem;
          }
          return item;
        }),
      };

    case 'DELETE_CART_ITEM_SUCCESS':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.cartItem.id),
      };

    default:
      return state;
  }
};
