import * as React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from 'context/authContext';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './configureStore';
import App from './App';
import './root.css';
import { AuthStoreProvider } from 'context/authMobxContext';

// const counterStore1 = new CounterStore();
// const counterStore2 = new CounterStore();

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthStoreProvider>
        <App />
      </AuthStoreProvider>
    </Provider>
  </BrowserRouter>,
  root,
);
