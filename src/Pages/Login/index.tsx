import { FormikHelpers } from 'formik';
import { connect } from 'react-redux';
import { loginRequestAction } from 'reducers/loadingReducer';
import { AppDispatch } from 'types/commonTypes';
import Login from './Login';
import { LoginInitValuesType } from './loginUtils';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onLogin: (
    values: LoginInitValuesType,
    actions: FormikHelpers<LoginInitValuesType>,
  ) => dispatch(loginRequestAction(values, actions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
