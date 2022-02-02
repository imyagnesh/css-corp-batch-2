import Product from '@components/Product';
import { CartContext } from 'context/cartContext';
import React, { useContext, useEffect } from 'react';

const Home = () => {
  const {
    products,
    cart,
    handleCart,
    loadData,
    updateCartItem,
    deleteCartItem,
    loading,
  } = useContext(CartContext);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="relative">
      {loading['LOAD_PRODUCTS'] && (
        <div className="flex justify-center items-center text-white text-4xl w-screen h-screen bg-gray-400 absolute z-10 opacity-30">
          Loading...
        </div>
      )}
      {products?.map((product) => {
        const cartItem = cart?.find((x) => x.productId === product.id);
        const addLoading = loading[`ADD_CART_ITEM_${product.id}`];
        const updateLoading = loading[`UPDATE_CART_ITEM_${product.id}`];
        const deleteLoading = loading[`DELETE_CART_ITEM_${product.id}`];
        return (
          <Product
            key={product.id}
            handleCart={handleCart}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            deleteCartItem={deleteCartItem}
            addLoading={addLoading}
            updateLoading={updateLoading}
            deleteLoading={deleteLoading}
            {...product}
          />
        );
      })}
    </div>
  );
};

export default Home;
