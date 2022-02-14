import { makeAutoObservable } from 'mobx';
import RootStore from '.';

export default class LoadingStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  setLoading = () => {};

  isLoading = (type: string) => {};
}
