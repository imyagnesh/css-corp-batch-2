import { FormikHelpers } from 'formik';
import { makeAutoObservable } from 'mobx';
import { LoginInitValuesType } from 'Pages/Login/loginUtils';
import { RegisterInitValuesType } from 'Pages/Register/registerUtils';
import AuthService from 'services/AuthService';
import { User } from 'types/UserType';
import RootStore from '.';

export default class AuthStore {
  private authenticated = false;

  private user: User | undefined = undefined;

  rootStore: RootStore;

  constructor(rootStore: RootStore, private readonly authService: AuthService) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
    this.authenticated = !!this.hasToken();
  }

  private setAuthenticated = (authenticated: boolean) => {
    this.authenticated = authenticated;
  };

  private setUser = (user?: User) => {
    this.user = user;
  };

  private hasToken = () => {
    return sessionStorage.getItem('@app/token');
  };

  onLogin = async (
    values: LoginInitValuesType,
    actions: FormikHelpers<LoginInitValuesType>,
  ) => {
    try {
      // this.rootStore.loadingStore.setLoading()
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
