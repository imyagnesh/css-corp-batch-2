import { AxiosResponse } from 'axios';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
} from 'constants/actionTypes';
import {
  LoginRequestActionType,
  RegisterRequestActionType,
} from 'reducers/actionTypes';
import {
  LoginFailAction,
  logoutFailAction,
  registerFailAction,
} from 'reducers/errorReducer';
import {
  loginSuccessAction,
  logoutSuccessAction,
  registerSuccessAction,
} from 'reducers/userReducer';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { AuthType } from 'types/authTypes';
import axiosInstance from 'utils/axios';

function* login({ values, actions }: LoginRequestActionType) {
  try {
    const { remember_me, serverError, ...rest } = values;
    const res: AxiosResponse<AuthType> = yield call(
      axiosInstance.post,
      'login',
      rest,
    );
    actions.resetForm();
    sessionStorage.setItem('@app/token', res.data.accessToken);
    yield put(loginSuccessAction(res.data.user));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    actions.setErrors({ serverError: message });
    yield put(LoginFailAction(message));
  }
}

function* register({ values, actions }: RegisterRequestActionType) {
  try {
    const { serverError, confirmPassword, ...rest } = values;
    const res: AxiosResponse<AuthType> = yield call(
      axiosInstance.post,
      'register',
      rest,
    );
    actions.resetForm();
    sessionStorage.setItem('@app/token', res.data.accessToken);
    yield put(registerSuccessAction(res.data.user));
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield call(actions.setErrors, { serverError: message });
    yield put(registerFailAction(message));
  } finally {
    actions.setSubmitting(false);
  }
}

function* logout() {
  try {
    sessionStorage.removeItem('@app/token');
    yield put(logoutSuccessAction());
  } catch (error) {
    let message = 'Something went wrong. Please try after sometime.';
    if (error instanceof Error) {
      message = error.message;
    }
    yield put(logoutFailAction(message));
  }
}

function* registerRequest() {
  yield takeLatest(REGISTER_REQUEST, register);
}

function* loginRequest() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* logoutRequest() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* rootUser() {
  yield all([fork(loginRequest), fork(registerRequest), fork(logoutRequest)]);
}
