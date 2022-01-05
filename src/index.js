import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Child1 from './child1';
import ErrorBoundary from './components/errorBoundary';
import { TodoProvider } from './context/todoContext';
// import App from './app';
import Todo from './pages/Todo';
import './root.css';
// import UserGreet from './Input';

// Mounting

// 1. Constructor (call only once)
// -> bind methods
// -> derive state value base on props
// -> Analytics

// 2. GetDerivedStateFromProps
// -> base on old state and prop value derive new state value

// 3. render
// ->  render HTML DOM

// 4. componentDidMount (call only once)
// -> on Page load fetch data
// -> manipulate dom
// -> analytics
// -> register events

// Updating
// 1. GetDerivedStateFromProps
// -> base on old state and prop value derive new state value

// 2. shouldComponentUpdate
// -> base on condition avoid re rendering

// 3. render
// ->  render HTML DOM

// 4. getSnapshotBeforeUpdate -> Not Possible in Hooks
// -> capture current UI

// 5. ComponentDidUpdate
// -> manipulate dom

// Unmount
// 1. ComponentWillUnmount
// -> clean all events, timers and promises

// Error
// 1. getDerivedStateFromError -> Not Possible in Hooks
// -> capturing UI errors

// 2. componentDidCatch -> Not Possible in Hooks
// -> log errors

const App = ({ counter }) => {
  const [xyz, setXyz] = useState(counter);
  const [abc, setAbc] = useState(0);
  const value = useRef('Hello from ref');
  const [text, setText] = useState('');

  const isMounted = useRef(false);

  const changeXyz = (data) => {
    setXyz((val) => val + data);
  };

  const changeABC = (data) => {
    setAbc((val) => val + data);
  };

  // Component Did Update for xyz only
  useEffect(() => {
    if (isMounted.current === true) {
      console.log('component Did Mount/Update on Xyz');
    }
    setAbc(xyz + 1);
  }, [xyz, counter]);

  // componentDidMount,
  // componentDidUpdate
  // Never Ever miss Second Parameter
  useEffect(() => {
    console.log('component Did Mount 1');
    isMounted.current = true;
    // console.log(document.getElementById('xyz-heading'));
  }, []);

  console.log('App render');

  console.log(value.current);

  return (
    <ErrorBoundary>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          setText('text change throw button');
          // console.log(value.current.value);
          // value.current.value = 'text change throw button';
        }}
      >
        Get Text Value
      </button>
      <div>
        <div>
          <button type="button" onClick={() => changeXyz(1)}>
            Increment Xyz
          </button>
          <h1 id="xyz-heading">{xyz}</h1>
          <button type="button" onClick={() => changeXyz(-1)}>
            Decrement Xyz
          </button>
        </div>

        <div>
          <button type="button" onClick={() => changeABC(1)}>
            Increment ABC
          </button>
          <h1>{abc}</h1>
          <button type="button" onClick={() => changeABC(-1)}>
            Decrement ABC
          </button>
        </div>
        {xyz < 10 && <Child1 />}
      </div>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App counter={5} />, document.getElementById('root'));

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
