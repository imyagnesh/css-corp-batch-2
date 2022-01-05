import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import weatherServer from './server';

weatherServer();

ReactDOM.render(<App />, document.getElementById('root'));
