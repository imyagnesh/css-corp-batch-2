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

  render() {
    console.log('Child 2 render');
    const { userInfo } = this.props;
    return (
      <div>
        <h1>Child 2 Component</h1>
        <h2>{userInfo.name}</h2>
      </div>
    );
  }
}
