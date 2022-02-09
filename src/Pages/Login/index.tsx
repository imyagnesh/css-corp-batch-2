import { FormikHelpers } from 'formik';
import { connect } from 'react-redux';
import { loginRequestAction } from 'reducers/loadingReducer';
import { AppDispatch } from 'types/commonTypes';
import Login from './Login';
import { LoginInitValuesType } from './loginUtils';
import { RootState } from 'types/commonTypes';

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onLogin: (
    values: LoginInitValuesType,
    actions: FormikHelpers<LoginInitValuesType>,
  ) => dispatch({ type: 'LOGIN_REQUEST', values, actions }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
