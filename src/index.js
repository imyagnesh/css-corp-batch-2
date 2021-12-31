import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './root.css';
import { WeatherProvider } from './context/weatherContext';
import App from './components/app';

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.getElementById('root'),
);
