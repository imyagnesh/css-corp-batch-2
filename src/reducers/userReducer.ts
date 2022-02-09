import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from 'constants/actionTypes';
import { User } from 'types/UserType';
import { AuthSuccessActionType, LogoutSuccessActionType } from './actionTypes';

export const loginSuccessAction = (user: User): AuthSuccessActionType => ({
  type: LOGIN_SUCCESS,
  user,
});

export const registerSuccessAction = (user: User): AuthSuccessActionType => ({
  type: REGISTER_SUCCESS,
  user,
});

export const logoutSuccessAction = (): LogoutSuccessActionType => ({
  type: LOGOUT_SUCCESS,
});

const initialState = {} as User;

export default (
  state: User = initialState,
  { type, user }: AuthSuccessActionType | LogoutSuccessActionType,
) => {
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, ...user };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};
