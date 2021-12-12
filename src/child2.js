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

  render() {
    console.log('child2 render');  
    const { user } = this.props;
    return (
      <div>
        <h2>Hello from child2 component</h2>
        <h2>{user.name}</h2>
      </div>
    );
  }
}
export default Child2;
