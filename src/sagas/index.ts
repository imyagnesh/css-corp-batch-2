import { all, fork } from 'redux-saga/effects';
import rootCart from './cartSaga';
import rootProducts from './productsSaga';

export default function* rootSaga() {
  yield all([fork(rootProducts), fork(rootCart)]);
}
