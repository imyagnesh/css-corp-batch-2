import Product from '@components/Product';
import React, { memo, useEffect } from 'react';
import { ProductType } from 'types/productsTypes';

type Props = {
  products: ProductType[];
  loadProducts: () => void;
  loadCart: () => void;
  loading: any;
};

const Home = ({ products, loadProducts, loadCart, loading }: Props) => {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, [loadProducts, loadCart]);

  return (
    <div className="relative">
      {loading['LOAD_PRODUCTS'] && (
        <div className="flex justify-center items-center text-white text-4xl w-screen h-screen bg-gray-400 absolute z-10 opacity-30">
          Loading...
        </div>
      )}
      {products?.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default memo(Home);
