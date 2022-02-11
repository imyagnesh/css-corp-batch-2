/* eslint-disable react/jsx-filename-extension */
import {
  CounterStoreContext,
  CounterStoreProvider,
  useCounterStore,
} from 'context/counterContext';
import {
  action,
  flow,
  makeAutoObservable,
  makeObservable,
  observable,
} from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import * as React from 'react';
import ReactDOM from 'react-dom';
import CounterStore from 'store/counterStore';
import axiosInstance from 'utils/axios';
// import { AuthProvider } from 'context/authContext';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import store from './configureStore';
// import App from './App';
import './root.css';

// const counterStore1 = new CounterStore();
// const counterStore2 = new CounterStore();

const Child1 = observer(() => {
  const counterStore = useLocalObservable(() => new CounterStore());

  const loadData = async () => {
    await counterStore.loadCounter();
  };

  return (
    <div>
      <h1>Counter 1</h1>
      <button type="button" onClick={loadData}>
        Load Counter
      </button>
      <button type="button" onClick={counterStore.increment}>
        +
      </button>
      <p>{counterStore.counter}</p>
      <button type="button" onClick={counterStore.decrement}>
        -
      </button>
    </div>
  );
});

const Child2 = observer(() => {
  const counterStore = useLocalObservable(() => new CounterStore());

  return (
    <div>
      <h1>Counter 2</h1>
      <button type="button" onClick={counterStore.increment}>
        +
      </button>
      <p>{counterStore.counter}</p>
      <button type="button" onClick={counterStore.decrement}>
        -
      </button>
    </div>
  );
});

// Prop value or state value change
const App = () => {
  // const [counter, setCounter] = React.useState(0);

  // const increment = () => {
  //   setCounter((val) => val + 1);
  // };

  // const decrement = () => {
  //   setCounter((val) => val - 1);
  // };

  return (
    <div>
      <Child1 />
      <Child2 />
    </div>
  );
};

const root = document.getElementById('root');

ReactDOM.render(
  <CounterStoreProvider>
    <App />
  </CounterStoreProvider>,
  root,
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Provider>
//   </BrowserRouter>,
//   root,
// );
