/* eslint-disable react/jsx-filename-extension */
import { AuthProvider } from 'context/authContext';
import { CartProvider } from 'context/cartContext';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './root.css';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
