/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './child1';
import Child2 from './child2';

class UserGreet extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      greet: props.username,
    };
  }

  greetUser = () => {
    this.setState((prevState, props) => ({
      greet: `Hello ${props.username}`,
    }));
  };

  render() {
    const { greet } = this.state;
    const { username } = this.props;
    console.log('render');
    return (
      <div>
        <h1 id="heading">{greet}</h1>
        <h2>{username}</h2>
        <button type="button" onClick={this.greetUser}>
          Greet User
        </button>
        <Child1 />
        <Child2 />
      </div>
    );
  }
}

export default UserGreet;