import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

export type ProductInitialStateType = {
  products: ProductType[];
  cart: CartType[];
  loading: boolean;
};

export const productInitialState: ProductInitialStateType = {
  products: [],
  cart: [],
  loading: false,
};

type RequestAction = {
  type:
    | 'LOAD_PRODUCTS_REQUEST'
    | 'ADD_CART_ITEM_REQUEST'
    | 'UPDATE_CART_ITEM_REQUEST'
    | 'DELETE_CART_ITEM_REQUEST';
};

type LoadProductSuccessAction = {
  type: 'LOAD_PRODUCTS_SUCCESS';
  data: Omit<ProductInitialStateType, 'loading'>;
};

type AddCartItemSuccess = {
  type:
    | 'ADD_CART_ITEM_SUCCESS'
    | 'UPDATE_CART_ITEM_SUCCESS'
    | 'DELETE_CART_ITEM_SUCCESS';
  cartItem: CartType;
};

type ProductActions =
  | LoadProductSuccessAction
  | AddCartItemSuccess
  | RequestAction;

export default (state: ProductInitialStateType, action: ProductActions) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_REQUEST':
    case 'ADD_CART_ITEM_REQUEST':
    case 'UPDATE_CART_ITEM_REQUEST':
    case 'DELETE_CART_ITEM_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, ...action.data };

    case 'ADD_CART_ITEM_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.cartItem],
      };

    case 'UPDATE_CART_ITEM_SUCCESS':
      return {
        ...state,
        loading: false,
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
        loading: false,
        cart: state.cart.filter((item) => item.id !== action.cartItem.id),
      };

    default:
      return state;
  }
};
