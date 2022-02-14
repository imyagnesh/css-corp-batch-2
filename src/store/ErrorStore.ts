import { makeAutoObservable } from 'mobx';
import RootStore from '.';

export default class ErrorStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setError = () => {};

  hasError = (type: string) => {};
}
