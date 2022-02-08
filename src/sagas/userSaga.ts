import { AxiosResponse } from 'axios';
import { loginRequestActionType } from 'reducers/actionTypes';
import { LoginFailAction } from 'reducers/errorReducer';
import { loginSuccessAction } from 'reducers/userReducer';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthType } from 'types/authTypes';
import { LoginActions } from 'types/commonTypes';
import axiosInstance from 'utils/axios';

function* login({ values, actions }: loginRequestActionType) {
  try {
    const { remember_me, serverError, ...rest } = values;
    const res: AxiosResponse<AuthType> = yield call(
      axiosInstance.post,
      'login',
      rest,
    );
    actions.resetForm();
    yield put(loginSuccessAction(res.data.user));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(LoginFailAction(message));
  }
}

function* loginRequest() {
  yield takeLatest(LoginActions.LOGIN_REQUEST, login);
}

export default function* rootUser() {
  yield all([]);
}
