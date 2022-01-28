import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

export type ProductInitialStateType = {
  products: ProductType[];
  cart: CartType[];
};

export const productInitialState: ProductInitialStateType = {
  products: [],
  cart: [],
};

type LoadProductSuccessAction = {
  type: 'LOAD_PRODUCTS_SUCCESS';
  data: ProductInitialStateType;
};

type AddCartItemSuccess = {
  type: 'ADD_CART_ITEM_SUCCESS';
  cartItem: CartType;
};

type ProductActions = LoadProductSuccessAction | AddCartItemSuccess;

export default (state: ProductInitialStateType, action: ProductActions) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, ...action.data };

    case 'ADD_CART_ITEM_SUCCESS':
      return { ...state, cart: [...state.cart, action.cartItem] };

    default:
      return state;
  }
};
