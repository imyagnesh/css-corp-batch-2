import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wether from './container/Wether';
import weatherServer from './server';
import { WeatherProvider } from './context/weatherContext';

weatherServer();

ReactDOM.render(
  <WeatherProvider>
    <Wether />
  </WeatherProvider>,
  document.getElementById('root'),
);
