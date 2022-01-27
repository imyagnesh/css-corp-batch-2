import Product from '@components/Product';
import React, { useCallback, useEffect, useState } from 'react';
import { ProductType } from 'types/productsTypes';
import axiosInstance from 'utils/axios';

interface Props {}

const Home = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get<ProductType[]>('660/products');
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
