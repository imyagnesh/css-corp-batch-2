import Product from '@components/Product';
import { loadCart } from 'actions/cartActions';
import { loadProducts } from 'actions/productActions';
import { CartContext } from 'context/cartContext';
import React, { memo, useContext, useEffect } from 'react';
import { connect } from 'react-redux';

const Home = ({ products, cart, loadProducts, loadCart }) => {
  const {
    // products,
    // cart,
    handleCart,
    loadData,
    updateCartItem,
    deleteCartItem,
    loading,
  } = useContext(CartContext);

  console.log(products);
  console.log(cart);

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

const mapStateToProps = (store) => {
  return {
    products: store.products,
    cart: store.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => loadCart()(dispatch),
    loadCart: () => loadProducts()(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
