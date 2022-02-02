import { ErrorActionType, RequestActionType } from './actionTypes';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import productReducer, {
  ProductActions,
  productInitialState,
  ProductInitialStateType,
} from './productReducer';

export type RootReducerType = {
  product: ProductInitialStateType;
  error: any;
  loading: any;
};

export const rootInitialState = {
  product: productInitialState,
  error: {},
  loading: {},
};

export type RootAction = ProductActions | RequestActionType | ErrorActionType;

export default (
  state: RootReducerType,
  action: RootAction,
): RootReducerType => {
  return {
    product: productReducer(state.product, action as ProductActions),
    loading: loadingReducer(state.loading, action as RequestActionType),
    error: errorReducer(state.error, action as ErrorActionType),
  };
};
