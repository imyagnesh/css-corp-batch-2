import { ProductType } from 'types/productsTypes';
import { LoadProductSuccessAction } from './actionTypes';

export const productInitialState: ProductType[] = [];

export default (
  state: ProductType[] = productInitialState,
  action: LoadProductSuccessAction,
) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS': {
      return action.data;
    }

    default:
      return state;
  }
};
