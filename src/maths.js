import React, { Component } from 'react';

export default class Maths extends Component {
  state = {
    counter: 0,
  };

  setCounter = (value) => {
    this.setState(({ counter }) => ({
      counter: counter + value,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>This is a Maths component</h1>
        <h2>Counter Value : {counter}</h2>

        <button type="button" onClick={() => this.setCounter(1)}>
          Increament Counter
        </button>
        <button type="button" onClick={() => this.setCounter(-1)}>
          Decreament Counter
        </button>
      </div>
    );
  }
}
