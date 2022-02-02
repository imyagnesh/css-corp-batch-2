import { CartType } from 'types/cartTypes';
import axiosInstance from 'utils/axios';

export const loadCart = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOAD_CART_REQUEST',
      });
      const res = await axiosInstance.get<CartType[]>('660/cart');
      dispatch({
        type: 'LOAD_CART_SUCCESS',
        data: res.data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_CART_FAIL',
        error: 'error',
      });
    }
  };
};
