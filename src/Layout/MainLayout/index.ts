import MainLayout from './MainLayout';
import { connect } from 'react-redux';
import { RootState, AppDispatch } from 'types/commonTypes';

const mapStateToProps = (store: RootState) => ({
  quantity: store.cart.reduce((p, c) => p + c.quantity, 0),
  error: store.error,
  isUserExist: Object.keys(store.user).length > 0,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearError: (key: string) =>
    dispatch({
      type: 'CLEAR_ERROR',
      key: key,
    }),
  onLogout: () => dispatch({ type: 'LOGOUT_REQUEST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
