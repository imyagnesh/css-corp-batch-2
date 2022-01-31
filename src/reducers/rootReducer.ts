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
    error: errorReducer(state, {
      type: action.type,
      processId: action.processId,
      error: action.error,
    } as ErrorActionType),
    loading: loadingReducer(state, {
      type: action.type,
      processId: action.processId,
    } as RequestActionType),
  };
};
