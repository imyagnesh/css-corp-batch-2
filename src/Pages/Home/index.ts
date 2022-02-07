import { loadCart } from 'actions/cartActions';
import { loadProducts } from 'actions/productActions';
import { AppDispatch, RootState } from 'types/commonTypes';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (store: RootState) => {
  return {
    products: store.products,
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    loadProducts: () => loadCart()(dispatch),
    loadCart: () => loadProducts()(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
