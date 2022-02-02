import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOAD_PRODUCTS_REQUEST',
      });
      const res = await axiosInstance.get<ProductType[]>('660/products');
      dispatch({
        type: 'LOAD_PRODUCTS_SUCCESS',
        data: res.data,
      });
    } catch (error) {
      //   const message = handleError(error);
      dispatch({
        type: 'LOAD_PRODUCTS_FAIL',
        error: 'Error',
      });
    }
  };
};
