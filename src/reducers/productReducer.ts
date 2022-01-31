import { CartType } from 'types/cartTypes';
import { LoadingType } from 'types/customTypes';
import { ProductType } from 'types/productsTypes';

export type ProductInitialStateType = {
  products: ProductType[];
  cart: CartType[];
  loading: any;
};

export const productInitialState: ProductInitialStateType = {
  products: [],
  cart: [],
  loading: {},
};

type RequestAction = {
  type:
    | 'LOAD_PRODUCTS_REQUEST'
    | 'ADD_CART_ITEM_REQUEST'
    | 'UPDATE_CART_ITEM_REQUEST'
    | 'DELETE_CART_ITEM_REQUEST';
  id?: number;
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
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);

  switch (action.type) {
    case 'LOAD_PRODUCTS_REQUEST':
    case 'ADD_CART_ITEM_REQUEST':
    case 'UPDATE_CART_ITEM_REQUEST':
    case 'DELETE_CART_ITEM_REQUEST': {
      if (!matches) return state;
      const id = action.id ? `_${action.id}` : '';
      const loading = { ...state.loading, [`${matches[1]}${id}`]: true };
      return { ...state, loading };
    }

    case 'LOAD_PRODUCTS_SUCCESS': {
      if (!matches) return state;
      const { [`${matches[1]}`]: data, ...loading } = state.loading;
      return { ...state, loading, ...action.data };
    }

    case 'ADD_CART_ITEM_SUCCESS': {
      if (!matches) return state;
      const id = `_${action.cartItem.productId}` || '';
      const { [`${matches[1]}${id}`]: data, ...loading } = state.loading;

      return {
        ...state,
        loading,
        cart: [...state.cart, action.cartItem],
      };
    }

    case 'UPDATE_CART_ITEM_SUCCESS': {
      if (!matches) return state;
      const id = `_${action.cartItem.productId}` || '';
      const { [`${matches[1]}${id}`]: data, ...loading } = state.loading;
      return {
        ...state,
        loading,
        cart: state.cart.map((item) => {
          if (item.id === action.cartItem.id) {
            return action.cartItem;
          }
          return item;
        }),
      };
    }

    case 'DELETE_CART_ITEM_SUCCESS': {
      if (!matches) return state;
      const id = `_${action.cartItem.productId}` || '';
      const { [`${matches[1]}${id}`]: data, ...loading } = state.loading;
      return {
        ...state,
        loading,
        cart: state.cart.filter((item) => item.id !== action.cartItem.id),
      };
    }

    default:
      return state;
  }
};
