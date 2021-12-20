import React from 'react';
import ReactDOM from 'react-dom';
import { TodoProvider } from './context/todoContext';
// import App from './app';
import Todo from './pages/Todo';
import Weather from './pages/Weather/weather';
import './root.css';
// import UserGreet from './Input';

// component
// 1. Function Component
// 2. Class Component

// Rules For Components
// 1. Name of the component should be start with upper case.
// 2. Per component return only 1 element/component
// 3. Instead of class have to use className
// 4. for inline style use object instead of string and property Name should be in camel case

// const Input = ({ title, caption }) => (
//   <div>
//     <h1 className="heading">{title}</h1>
//     <h2
//       style={{
//         backgroundColor: false ? 'red' : 'blue',
//         color: '#fff',
//       }}
//     >
//       {caption}
//     </h2>
//     <input type="checkbox" />
//   </div>
// );

// Class Component

//ReactDOM.render(<Weather />, document.getElementById('root'));
ReactDOM.render(
  <TodoProvider>
    <Todo />
  </TodoProvider>,
  document.getElementById('root'),
);
