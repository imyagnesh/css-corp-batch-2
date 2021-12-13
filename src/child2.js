/* eslint-disable no-trailing-spaces */
import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { PureComponent } from 'react/cjs/react.development';

class Child2 extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState) {
    // return shallowCompare(this, nextProps, nextState);
    // console.log(`current props counter value${this.props.counter}`);
    // console.log(`next props counter value${nextProps.counter}`);
    // if (this.props.counter < nextProps.counter) { return true; }
    // return false; 
    return this.props.counter < nextProps.counter
  } */

  /* for unmounting event we need to write separate method to register an event
  using this separate method we need to unmount using componentwillUnmount */    
  
  state = {
    counter: 0,
  };

  MouseMove = () => {
    console.log('mousemove');
  };
  
  componentDidMount() {
    document.addEventListener('mousemove', this.MouseMove);
    /* this.interval = setInterval(() => {
      console.log('hello from interval');
    }, 1000); */
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.MouseMove);
    // clearInterval(this.interval);
  }  

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  incrementCounter = () => {
    // throw new Error('something went wrong');
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    console.log('child2 render');  
    const { user } = this.props;
    const { counter } = this.state;
    if (counter > 5) {
      return <h1>something went wrong</h1>;
    }
    return (
      <div>
        <h1>{counter}</h1>
        <h2>Hello from child2 component</h2>
        <h2>{user.name}</h2>
        <button onClick={this.incrementCounter}>increment Counter</button>
      </div>
    );
  }
}
export default Child2;
