import { AxiosResponse } from 'axios';
import { LoadCartSuccessAction } from 'reducers/cartReducer';
import { LoadCartErrorAction } from 'reducers/errorReducer';
import { takeEvery, call, put } from 'redux-saga/effects';
import { CartType } from 'types/cartTypes';
import axiosInstance from 'utils/axios';

function* loadCart() {
  try {
    const res: AxiosResponse<CartType[]> = yield call(
      axiosInstance.get,
      '660/cart',
    );
    yield put(LoadCartSuccessAction(res.data));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(LoadCartErrorAction(message));
  }
}

export default function* rootCart() {
  yield takeEvery('LOAD_CART_REQUEST', loadCart);
}
