import { action, flow, makeObservable, observable } from 'mobx';

class CounterStore {
  counter = 0;

  constructor() {
    makeObservable(this, {
      counter: observable,
      increment: action,
      decrement: action,
      loadCounter: flow,
    });
    // makeAutoObservable(this);
  }

  increment = () => {
    console.log('increment');

    this.counter++;
  };

  decrement = () => {
    console.log('decrement');
    this.counter--;
  };

  *loadCounter() {
    const res = yield axiosInstance.get('value');
    this.counter = res.data.val;
  }
}

export default CounterStore;
