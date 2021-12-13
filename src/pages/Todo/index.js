import React, { Component } from 'react';
import Test1 from '../Test1';
import './todoStyle.scss';

export default class Todo extends Component {
  render() {
    return (
      <div className="container">
        <h1>Todo App</h1>
        <Test1 />
      </div>
    );
  }
}
