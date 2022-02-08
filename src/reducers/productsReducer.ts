import { LoadProductsActions } from 'types/commonTypes';
import { ProductType } from 'types/productsTypes';
import { LoadProductSuccessActionType } from './actionTypes';

export const LoadProductsSuccess = (
  data: ProductType[],
): LoadProductSuccessActionType => ({
  type: LoadProductsActions.LOAD_PRODUCTS_SUCCESS,
  data,
});

export const productInitialState: ProductType[] = [];

export default (
  state: ProductType[] = productInitialState,
  action: LoadProductSuccessActionType,
) => {
  switch (action.type) {
    case LoadProductsActions.LOAD_PRODUCTS_SUCCESS: {
      return action.data;
    }

    default:
      return state;
  }
};
