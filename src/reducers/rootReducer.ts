import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';
import {
  CartItemSuccess,
  ErrorActionType,
  LoadCartSuccessAction,
  LoadProductSuccessAction,
  RequestActionType,
} from './actionTypes';
import cartReducer from './cartReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import productsReducer from './productsReducer';

export type RootReducerType = {
  products: ProductType[];
  cart: CartType[];
  error: any;
  loading: any;
};

export const rootInitialState = {
  products: [],
  cart: [],
  error: {},
  loading: {},
};

export type RootAction =
  | LoadProductSuccessAction
  | LoadCartSuccessAction
  | CartItemSuccess
  | RequestActionType
  | ErrorActionType;

export default (
  state: RootReducerType,
  action: RootAction,
): RootReducerType => {
  return {
    cart: cartReducer(
      state.cart,
      action as LoadCartSuccessAction | CartItemSuccess,
    ),
    products: productsReducer(
      state.products,
      action as LoadProductSuccessAction,
    ),
    loading: loadingReducer(state.loading, action as RequestActionType),
    error: errorReducer(state.error, action as ErrorActionType),
  };
};
