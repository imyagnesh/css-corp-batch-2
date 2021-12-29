import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import './root.css';
import WeatherProvider from './context/weatherContext'

ReactDOM.render(
    <WeatherProvider>
        <App />
    </WeatherProvider>,
    document.getElementById('root'),
);