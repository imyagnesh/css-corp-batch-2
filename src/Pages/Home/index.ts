import {
  addCartItem,
  deleteCartItem,
  loadCart,
  updateCartItem,
} from 'actions/cartActions';
import { loadProducts } from 'actions/productActions';
import { AppDispatch, RootState } from 'configureStore';
import { connect } from 'react-redux';
import { CartType } from 'types/cartTypes';
import Home from './Home';

const mapStateToProps = (store: RootState) => {
  return {
    products: store.products,
    cart: store.cart,
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    loadProducts: () => loadCart()(dispatch),
    loadCart: () => loadProducts()(dispatch),
    addCartItem: (productId: number) => addCartItem(productId)(dispatch),
    updateCartItem: (cartItem: CartType) => updateCartItem(cartItem)(dispatch),
    deleteCartItem: (cartItem: CartType) => deleteCartItem(cartItem)(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
