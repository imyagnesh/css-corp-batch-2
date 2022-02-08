import { LoginActions } from 'types/commonTypes';
import { User } from 'types/UserType';
import { loginSuccessActionType } from './actionTypes';

export const loginSuccessAction = (user: User): loginSuccessActionType => ({
  type: LoginActions.LOGIN_SUCCESS,
  user,
});

const initialState = {};

export default (state = initialState, { type, user }) => {
  switch (type) {
    case LoginActions.LOGIN_SUCCESS:
      return { ...state, ...user };

    default:
      return state;
  }
};
