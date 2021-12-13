import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

// render method will call whenever state or props value change
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      user: {
        name: 'Mohammed fazil',
        age: 30,
      },
    };
    // without arrow functions we need to use bind method
    // this.changeGreet = this.changeGreet.bind(this);
    console.log(document.getElementById('heading'));
  }

  // state = {
  //   counter: 0,
  //   greet: '',
  // };

  /* static getDerivedStateFromProps(props, state) {
    console.log(document.getElementById('heading'));
    if (!state.greet) {
      return {
        greet: `hello ${props.name}`,
      };
    }
    return null;
  } */

  changeGreet = () => {
    this.setState((prevState, props) => ({
      greet: `hola ${props.name}`,
    }));
  };

  // mainpulate the DOM elements
  // call only once same like constructor
  // call API and display data on page load
  // register an event
  componentDidMount() {
    console.log(document.getElementById('heading'));
    document.addEventListener('click', () => {
      console.log('clicked');
    });
  }

  setCounter = (value) => {
    this.setState(({ counter }) => ({
      counter: counter + value,
    }));
  };

  changeUsername = () => {
    this.setState(({ user }) => {
      console.log(user);
      return {
        user: { ...user, name: 'virat' },
      };
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'hello from snapshot';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`snapshot value:${snapshot}`);
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    console.log('render');
    const {
      counter, greet, user, error,
    } = this.state;
    if (error) {
      return <h1>{error.message}</h1>;
    }
    return (
      <div>
        <h1>{greet}</h1>
        <h1>hello from App component</h1>
        <h2>{user.name}</h2>
        <h2 id="heading">{counter}</h2>
        <button type="button" onClick={() => this.setCounter(1)}>Increment Counter</button>
        <button type="button" onClick={() => this.setCounter(-1)}>decrement Counter</button>
        {/*
        <button type="button" onClick={this.changeGreet}>Change greet message</button>
        */}
        <button type="button" onClick={this.changeUsername}>Change username</button>
        <Child1 counter={counter} />
        {counter < 10 && <Child2 user={user} />}
      </div>
    );
  }
}
App.getDerivedStateFromProps = (props, state) => {
  console.log(document.getElementById('heading'));
  if (!state.greet) {
    return {
      greet: `hello ${props.name}`,
    };
  }
  return null;
};

export default App;
