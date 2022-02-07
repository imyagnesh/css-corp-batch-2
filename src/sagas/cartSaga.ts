import { AxiosResponse } from 'axios';
import { LoadingActions, RequestActionType } from 'reducers/actionTypes';
import {
  AddCartItemSuccessAction,
  LoadCartSuccessAction,
  UpdateCartItemSuccessAction,
} from 'reducers/cartReducer';
import {
  AddCartItemFailAction,
  LoadCartErrorAction,
  UpdateCartItemFailAction,
} from 'reducers/errorReducer';
import {
  takeEvery,
  call,
  put,
  all,
  fork,
  takeLatest,
} from 'redux-saga/effects';
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

function* addCartItem({ processId }: LoadingActions) {
  try {
    const res: AxiosResponse<CartType> = yield call(
      axiosInstance.post,
      '660/cart',
      {
        productId: processId,
        quantity: 1,
      },
    );
    yield put(AddCartItemSuccessAction(res.data, processId || 0));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(AddCartItemFailAction(message, processId || 0));
  }
}

function* updateCartItem({ cartItem, processId }: RequestActionType) {
  try {
    if (cartItem) {
      const res: AxiosResponse<CartType> = yield call(
        axiosInstance.put,
        `660/cart/${cartItem.id}`,
        cartItem,
      );
      yield put(UpdateCartItemSuccessAction(res.data, processId || 0));
    }
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(UpdateCartItemFailAction(message, processId || 0));
  }
}

function* deleteCartItem() {}

function* loadCartRequest() {
  yield takeEvery('LOAD_CART_REQUEST', loadCart);
}

function* addCartItemRequest() {
  yield takeLatest('ADD_CART_ITEM_REQUEST', addCartItem);
}

function* updateCartItemRequest() {
  yield takeLatest('UPDATE_CART_ITEM_REQUEST', updateCartItem);
}

function* deleteCartItemRequest() {
  yield takeLatest('DELETE_CART_ITEM_REQUEST', deleteCartItem);
}

export default function* rootCart() {
  yield all([
    fork(loadCartRequest),
    fork(addCartItemRequest),
    fork(updateCartItemRequest),
    fork(deleteCartItemRequest),
  ]);
}
