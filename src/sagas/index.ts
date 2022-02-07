import { all } from 'redux-saga/effects';
import rootCart from './cartSaga';
import rootProducts from './productsSaga';

export default function* rootSaga() {
  yield all([rootProducts(), rootCart()]);
}
