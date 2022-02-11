import { FormikHelpers } from 'formik';
import { makeAutoObservable } from 'mobx';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import AuthService from 'services/AuthService';
import { User } from 'types/UserType';

export default class AuthStore {
  private authenticated = false;

  private user: User | undefined = undefined;

  constructor(private readonly authService: AuthService) {
    makeAutoObservable(this);
  }

  private setAuthenticated = (authenticated: boolean) => {
    this.authenticated = authenticated;
  };

  private setUser = (user?: User) => {
    this.user = user;
  };

  onLogin = async (
    values: LoginInitValuesType,
    actions: FormikHelpers<LoginInitValuesType>,
  ) => {
    try {
      const res = await this.authService.login(values);
      sessionStorage.setItem('@app/token', res.accessToken);
      actions.resetForm();
      this.setUser(res.user);
      this.setAuthenticated(true);
    } catch (error) {
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      actions.setErrors({ serverError: message });
    }
  };

  onRegister = async (
    values: RegisterInitValuesType,
    actions: FormikHelpers<RegisterInitValuesType>,
  ) => {
    try {
      const res = await this.authService.register(values);
      sessionStorage.setItem('@app/token', res.accessToken);
      actions.resetForm();
      this.setUser(res.user);
      this.setAuthenticated(true);
    } catch (error) {
      let message = 'Something went wrong. Please try after sometime.';
      if (error instanceof Error) {
        message = error.message;
      }
      actions.setErrors({ serverError: message });
    }
  };

  onLogout = async () => {
    sessionStorage.removeItem('@app/token');
    this.setAuthenticated(false);
    this.setUser();
  };

  isAuthenticated = () => {
    return this.authenticated;
  };

  getUser = () => {
    return this.user;
  };
}
