import { AppDispatch, RootState } from 'types/commonTypes';
import { connect } from 'react-redux';
import Home from './Home';
import {
  LoadCartRequestAction,
  LoadProductRequestAction,
} from 'reducers/loadingReducer';

const mapStateToProps = (store: RootState) => {
  return {
    products: store.products,
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    loadProducts: () => dispatch(LoadProductRequestAction()),
    loadCart: () => dispatch(LoadCartRequestAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
