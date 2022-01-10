import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wether from './container/Wether';
import weatherServer from './server';

weatherServer();

ReactDOM.render(<Wether />, document.getElementById('root'));
