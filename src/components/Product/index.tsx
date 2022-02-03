import Product, { ProductProps } from './Product';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from 'types/commonTypes';
import {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} from 'actions/cartActions';
import { CartType } from 'types/cartTypes';
import { ProductType } from 'types/productsTypes';

const mapStateToProps = (state: RootState, props: ProductType) => ({
  cartItem: state.cart?.find((x) => x.productId === props.id),
  addLoading: state.loading[`ADD_CART_ITEM_${props.id}`],
  updateLoading: state.loading[`UPDATE_CART_ITEM_${props.id}`],
  deleteLoading: state.loading[`DELETE_CART_ITEM_${props.id}`],
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addCartItem: (productId: number) => addCartItem(productId)(dispatch),
  updateCartItem: (cartItem: CartType) => updateCartItem(cartItem)(dispatch),
  deleteCartItem: (cartItem: CartType) => deleteCartItem(cartItem)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
