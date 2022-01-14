import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import weatherServer from './server';
import './index.css';
import './root.css';

weatherServer();

ReactDOM.render(<App />, document.getElementById('root'));