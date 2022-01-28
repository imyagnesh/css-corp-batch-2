import Product from '@components/Product';
import { CartContext } from 'context/cartContext';
import React, { useContext, useEffect } from 'react';

const Home = () => {
  const { products, cart, handleCart, loadData } = useContext(CartContext);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      {products?.map((product) => {
        const cartItem = cart?.find((x) => x.productId === product.id);
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
