import MainLayout from './MainLayout';
import { connect } from 'react-redux';
import { RootState, AppDispatch } from 'types/commonTypes';

const mapStateToProps = (store: RootState) => ({
  quantity: store.cart.reduce((p, c) => p + c.quantity, 0),
  error: store.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearError: (key: string) =>
    dispatch({
      type: 'CLEAR_ERROR',
      key: key,
      error: '',
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
