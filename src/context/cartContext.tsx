import useError from 'hooks/useError';
import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import productReducer, { productInitialState } from 'reducers/productReducer';
import rootReducer, { rootInitialState } from 'reducers/rootReducer';
import { CartType } from 'types/cartTypes';
import { ProviderType } from 'types/customTypes';
import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

type CartProviderValue = {
  cart?: CartType[];
  products?: ProductType[];
  loading: any;
  error: any;
  handleCart: (productId: number) => Promise<void>;
  loadData: () => Promise<void>;
  updateCart: (cartItem: CartType) => void;
  deleteCartItem: (cartItem: CartType) => void;
  updateCartItem: (cartItem: CartType) => void;
  clearError: (key: string) => void;
};

export const CartContext = createContext<CartProviderValue>(
  {} as CartProviderValue,
);

export const CartProvider = ({ children }: ProviderType) => {
  const [
    {
      product: { cart, products },
      loading,
      error,
    },
    dispatch,
  ] = useReducer(rootReducer, rootInitialState);
  const handleError = useError();

  const loadData = useCallback(async () => {
    try {
      dispatch({
        type: 'LOAD_PRODUCTS_REQUEST',
      });
      const res = await Promise.all([
        axiosInstance.get<ProductType[]>('660/products'),
        axiosInstance.get<CartType[]>('660/cart'),
      ]);

      dispatch({
        type: 'LOAD_PRODUCTS_SUCCESS',
        data: {
          products: res[0].data,
          cart: res[1].data,
        },
      });
    } catch (error) {
      const message = handleError(error);
      dispatch({
        type: 'LOAD_PRODUCTS_FAIL',
        error: message,
      });
    }
  }, []);

  const handleCart = useCallback(async (productId) => {
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
      // setCart((val) => [...val, res.data]);
    } catch (error) {
      const message = handleError(error);
      console.log(message);

      dispatch({
        type: 'ADD_CART_ITEM_FAIL',
        processId: productId,
        error: message,
      });
    }
  }, []);

  const deleteCartItem = useCallback(async (cartItem: CartType) => {
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
      const message = handleError(error);
      dispatch({
        type: 'DELETE_CART_ITEM_FAIL',
        processId: cartItem.productId,
        error: message,
      });
    }
  }, []);

  const updateCartItem = useCallback(async (cartItem: CartType) => {
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
      const message = handleError(error);
      dispatch({
        type: 'UPDATE_CART_ITEM_FAIL',
        processId: cartItem.productId,
        error: message,
      });
    }
  }, []);

  const clearError = useCallback((key: string) => {
    dispatch({
      type: 'CLEAR_ERROR',
      key: key,
      error: '',
    });
  }, []);

  const updateCart = useCallback(
    (cartItem: CartType) => {
      if (cartItem.quantity > 0) {
        updateCartItem(cartItem);
      } else {
        deleteCartItem(cartItem);
      }
    },
    [updateCartItem, deleteCartItem],
  );

  const value = useMemo(
    () => ({
      cart,
      products,
      handleCart,
      loadData,
      updateCart,
      updateCartItem,
      deleteCartItem,
      loading,
      error,
      clearError,
    }),
    [
      cart,
      products,
      handleCart,
      loadData,
      updateCart,
      loading,
      updateCartItem,
      deleteCartItem,
      error,
      clearError,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
