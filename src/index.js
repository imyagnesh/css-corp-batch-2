import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
import Todo from './pages/todo';
import './root.css';

// types of component

// 1.function component
// 2.class component

// rules for component
// 1.component name should start with upperCase letter
// 2.per component return only one element
// 3.we should use className instead of class as class is a reserved keyword in JS
// 4.For inline style we should give as objects
// 5.css property name should be a camel case
/* const App = ({ title, caption }) => (
  <div className="heading-parent">
    <h1>
      {title}
    </h1>
    <h2 style={{
      backgroundColor: true ? 'red' : 'blue',
      color: '#fff',
    }}
    >
      {caption}

    </h2>
    <h3>learning props</h3>
  </div>
); */
ReactDOM.render(<Todo />, document.getElementById('root'));
