import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { WeatherProvider } from './components/context/WeatherContext';
import weatherServer from './server';
import './root.css';

weatherServer();

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.getElementById('root'),
);
