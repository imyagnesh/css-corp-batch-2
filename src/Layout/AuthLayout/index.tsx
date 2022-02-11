import { observer } from 'mobx-react-lite';
import AuthLayout from './AuthLayout';

export default observer(AuthLayout);
// import { connect } from 'react-redux';
// import { RootState } from 'types/commonTypes';

// const mapStateToProps = (state: RootState) => ({
//   user: state.user,
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
