import { AppDispatch } from 'types/commonTypes';
import { CartType } from 'types/cartTypes';
import axiosInstance from 'utils/axios';

export const loadCart = () => {
  return async (dispatch: AppDispatch) => {
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
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      dispatch({
        type: 'LOAD_CART_FAIL',
        error: message,
      });
    }
  };
};

export const addCartItem =
  (productId: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: 'ADD_CART_ITEM_REQUEST',
        processId: productId,
      });
      const res = await axiosInstance.post<CartType>('660/cart', {
        productId,
        quantity: 1,
      });
      dispatch({
        type: 'ADD_CART_ITEM_SUCCESS',
        cartItem: res.data,
        processId: productId,
      });
    } catch (error) {
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      dispatch({
        type: 'ADD_CART_ITEM_FAIL',
        processId: productId,
        error: message,
      });
    }
  };

export const deleteCartItem =
  (cartItem: CartType) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: 'DELETE_CART_ITEM_REQUEST',
        processId: cartItem.productId,
      });
      await axiosInstance.delete(`660/cart/${cartItem.id}`);
      dispatch({
        type: 'DELETE_CART_ITEM_SUCCESS',
        cartItem,
        processId: cartItem.productId,
      });
    } catch (error) {
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      dispatch({
        type: 'DELETE_CART_ITEM_FAIL',
        processId: cartItem.productId,
        error: message,
      });
    }
  };

export const updateCartItem =
  (cartItem: CartType) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: 'UPDATE_CART_ITEM_REQUEST',
        processId: cartItem.productId,
      });
      const res = await axiosInstance.put<CartType>(
        `660/cart/${cartItem.id}`,
        cartItem,
      );
      dispatch({
        type: 'UPDATE_CART_ITEM_SUCCESS',
        cartItem: res.data,
        processId: cartItem.productId,
      });
    } catch (error) {
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      dispatch({
        type: 'UPDATE_CART_ITEM_FAIL',
        processId: cartItem.productId,
        error: message,
      });
    }
  };
