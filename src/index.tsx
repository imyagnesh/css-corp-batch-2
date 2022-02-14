import * as React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from 'context/authContext';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './configureStore';
import App from './App';
import './root.css';
import { RootStoreProvider } from 'context/rootStoreContext';

// const counterStore1 = new CounterStore();
// const counterStore2 = new CounterStore();

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RootStoreProvider>
        <App />
      </RootStoreProvider>
    </Provider>
  </BrowserRouter>,
  root,
);
