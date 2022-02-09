import { connect } from 'react-redux';
import { RootState } from 'types/commonTypes';
import AuthLayout from './AuthLayout';

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
