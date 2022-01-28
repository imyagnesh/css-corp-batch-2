import useError from 'hooks/useError';
import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import productReducer, { productInitialState } from 'reducers/productReducer';
import { CartType } from 'types/cartTypes';
import { ProviderType } from 'types/customTypes';
import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

type CartProviderValue = {
  cart?: CartType[];
  products?: ProductType[];
  loading: boolean;
  handleCart: (productId: number) => Promise<void>;
  loadData: () => Promise<void>;
  updateCart: (cartItem: CartType) => void;
};

export const CartContext = createContext<CartProviderValue>({
  handleCart: async () => {},
  loadData: async () => {},
  updateCart: () => {},
  loading: false,
});

export const CartProvider = ({ children }: ProviderType) => {
  const [{ cart, products, loading }, dispatch] = useReducer(
    productReducer,
    productInitialState,
  );
  const handleError = useError();

  console.log('loading', loading);

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
      console.log(message);
    }
  }, []);

  const handleCart = useCallback(async (productId) => {
    try {
      console.log(productId);

      dispatch({
        type: 'ADD_CART_ITEM_REQUEST',
      });
      const res = await axiosInstance.post<CartType>('660/cart', {
        productId,
        quantity: 1,
      });
      dispatch({
        type: 'ADD_CART_ITEM_SUCCESS',
        cartItem: res.data,
      });
      // setCart((val) => [...val, res.data]);
    } catch (error) {
      handleError(error);
    }
  }, []);

  const deleteCartItem = useCallback(async (cartItem) => {
    try {
      dispatch({
        type: 'DELETE_CART_ITEM_REQUEST',
      });
      await axiosInstance.delete(`660/cart/${cartItem.id}`);
      dispatch({
        type: 'DELETE_CART_ITEM_SUCCESS',
        cartItem,
      });
    } catch (error) {
      handleError(error);
    }
  }, []);

  const updateCartItem = useCallback(async (cartItem) => {
    try {
      dispatch({
        type: 'UPDATE_CART_ITEM_REQUEST',
      });
      const res = await axiosInstance.put<CartType>(
        `660/cart/${cartItem.id}`,
        cartItem,
      );
      dispatch({
        type: 'UPDATE_CART_ITEM_SUCCESS',
        cartItem: res.data,
      });
    } catch (error) {
      handleError(error);
    }
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
      loading,
    }),
    [cart, products, handleCart, loadData, updateCart, loading],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
