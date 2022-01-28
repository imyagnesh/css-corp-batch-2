import Product from '@components/Product';
import { CartContext } from 'context/cartContext';
import React, { useContext, useEffect } from 'react';

const Home = () => {
  const { products, cart, handleCart, loadData, updateCart, loading } =
    useContext(CartContext);

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log(loading);

  return (
    <div className="relative">
      {loading && (
        <div className="flex justify-center items-center text-white text-4xl w-screen h-screen bg-gray-400 absolute z-10 opacity-30">
          Loading...
        </div>
      )}
      {products?.map((product) => {
        const cartItem = cart?.find((x) => x.productId === product.id);
        return (
          <Product
            key={product.id}
            handleCart={handleCart}
            cartItem={cartItem}
            updateCart={updateCart}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default Home;
