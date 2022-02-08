import { all, fork } from 'redux-saga/effects';
import rootCart from './cartSaga';
import rootProducts from './productsSaga';
import rootUser from './userSaga';

export default function* rootSaga() {
  yield all([fork(rootProducts), fork(rootCart), fork(rootUser)]);
}
