import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { WeatherProvider } from './components/context/WeatherContext';

import './root.css';

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.getElementById('root'),
);
