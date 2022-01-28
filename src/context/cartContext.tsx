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
  handleCart: (productId: number) => Promise<void>;
  loadData: () => Promise<void>;
};

export const CartContext = createContext<CartProviderValue>({
  handleCart: async () => {},
  loadData: async () => {},
});

export const CartProvider = ({ children }: ProviderType) => {
  const [{ cart, products }, dispatch] = useReducer(
    productReducer,
    productInitialState,
  );
  const handleError = useError();

  const loadData = useCallback(async () => {
    try {
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
      console.log(error);
    }
  }, []);

  const updateCart = useCallback(() => {}, []);

  const value = useMemo(
    () => ({
      cart,
      products,
      handleCart,
      loadData,
    }),
    [cart, products, handleCart, loadData],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
