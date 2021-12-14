import React, { PureComponent, Component } from 'react';
// import shallowCompare from 'react-addons-shallow-compare';

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     // return this.props.counter < nextProps.counter;
  //     // if (this.props.counter < nextProps.counter) {
  //     //   return true;
  //     // }
  //     // return false;
  //     return shallowCompare(this, nextProps, nextState);
  //     // if (this.state !== nextState || this.props !== nextProps) {
  //     //   return true;
  //     // }
  //     // return false;
  //   }

  state = {
    counter: 0,
  };

  // mouseMove = () => {
  //   console.log('Mouse Move');
  // };

  // componentDidMount() {
  //   document.addEventListener('mousemove', this.mouseMove);
  //   this.interval = setInterval(() => {
  //     console.log('hello from interval');
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousemove', this.mouseMove);
  //   clearInterval(this.interval);
  //   // cancel API
  // }

  incrementCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    console.log('Child 2 render');
    const { userInfo } = this.props;
    const { counter } = this.state;
    if (counter > 5) {
      throw new Error('something went wrong');
    }
    return (
      <div>
        <h1>Child 2 Component</h1>
        <h2>{userInfo.name}</h2>
        <h2>{counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }
}
