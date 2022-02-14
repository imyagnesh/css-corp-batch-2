import AuthStore from './AuthStore';
import ErrorStore from './ErrorStore';
import LoadingStore from './LoadingStore';
import AuthService from '../services/AuthService';

export default class RootStore {
  authStore: AuthStore;
  errorStore: ErrorStore;
  loadingStore: LoadingStore;

  constructor() {
    this.authStore = new AuthStore(this, new AuthService());
    this.errorStore = new ErrorStore(this);
    this.loadingStore = new LoadingStore(this);
  }
}
