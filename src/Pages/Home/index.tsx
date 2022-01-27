import Product from '@components/Product';
import useError from 'hooks/useError';
import React, { useCallback, useEffect, useState } from 'react';
import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

interface Props {}

const Home = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartType[]>([]);
  const handleError = useError();

  const loadData = useCallback(async () => {
    try {
      const res = await Promise.all([
        axiosInstance.get<ProductType[]>('660/products'),
        axiosInstance.get<CartType[]>('660/cart'),
      ]);
      setProducts(res[0].data);
      setCart(res[1].data);
    } catch (error) {
      const message = handleError(error);
      console.log(message);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCart = useCallback(async (productId) => {
    try {
      const res = await axiosInstance.post<CartType>('660/cart', {
        productId,
        quantity: 1,
      });
      setCart((val) => [...val, res.data]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log('hello list');

  return (
    <div>
      {products.map((product) => {
        const cartItem = cart.find((x) => x.productId === product.id);
        return (
          <Product
            key={product.id}
            handleCart={handleCart}
            cartItem={cartItem}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default Home;
