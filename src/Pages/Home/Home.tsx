import Product from '@components/Product';
import React, { memo, useEffect } from 'react';
import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

type Props = {
  products: ProductType[];
  cart: CartType[];
  loadProducts: () => Promise<void>;
  loadCart: () => Promise<void>;
  addCartItem: (productId: number) => Promise<void>;
  updateCartItem: (cartItem: CartType) => Promise<void>;
  deleteCartItem: (cartItem: CartType) => Promise<void>;
  loading: any;
};

const Home = ({
  products,
  cart,
  loadProducts,
  loadCart,
  loading,
  addCartItem,
  updateCartItem,
  deleteCartItem,
}: Props) => {
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
        const cartItem = cart?.find((x) => x.productId === product.id);
        const addLoading = loading[`ADD_CART_ITEM_${product.id}`];
        const updateLoading = loading[`UPDATE_CART_ITEM_${product.id}`];
        const deleteLoading = loading[`DELETE_CART_ITEM_${product.id}`];
        return (
          <Product
            key={product.id}
            handleCart={addCartItem}
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

export default memo(Home);
