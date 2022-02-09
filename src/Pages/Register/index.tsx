import { FormikHelpers } from 'formik';
import { connect } from 'react-redux';
import { AppDispatch } from 'types/commonTypes';
import Register from './Register';
import { RegisterInitValuesType } from './registerUtils';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onRegister: (
    values: RegisterInitValuesType,
    actions: FormikHelpers<RegisterInitValuesType>,
  ) => dispatch({ type: 'REGISTER_REQUEST', values, actions }),
});

export default connect(null, mapDispatchToProps)(Register);
