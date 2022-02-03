import { AppDispatch } from 'types/commonTypes';
import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

export const loadProducts = () => {
  return async (dispatch: AppDispatch) => {
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
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      dispatch({
        type: 'LOAD_PRODUCTS_FAIL',
        error: message,
      });
    }
  };
};
