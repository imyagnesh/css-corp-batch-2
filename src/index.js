import React from 'react';
import ReactDOM from 'react-dom';
import WeatherWatchApp from './pages/weatherApp';
import { WeatherProvider } from './pages/weatherApp/context/weatherContext';
import './root.css';

ReactDOM.render(<WeatherProvider><WeatherWatchApp /></WeatherProvider>, document.getElementById('root'));
