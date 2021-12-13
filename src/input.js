import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* class Input extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  } */

/* incrementCounter = () => {
    // const { counter } = this.state;
    // console.log(this);
    // this.setState({
    //   counter: counter + 1,
    // });
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }; */

/* setCounter = (event) => {
    const btnType = event.target.name;
    this.setState(({ counter }) => ({
      counter: btnType === 'increment' ? counter + 1 : counter - 1,
    }));
  }; */

/*
   for custom parameters passing we need to write function like below
   {(event) => this.setCounter(event, 1)}
  */
// increment and decrement counter logic
/* setCounter = (event, value) => {
    // const btnType = event.target.name;
    this.setState(({ counter }) => ({
      // counter: btnType === 'increment' ? counter + 1 : counter - 1,
      counter: counter + value,
    }));
  };

  render() {
    console.log('render method calling');
    const { title, caption } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{caption}</h1>
        <h2>Counter value demo</h2>
        <h3>{counter}</h3>
        {/* <button
          type="button"
          name="increment"
          onClick={(event) => this.setCounter(event, 1)}
        >
          Increment counter

        </button>
        <button
          type="button"
          name="decrement"
          onClick={(event) => this.setCounter(event, -1)}
        >
          decrement counter

        </button>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
}; */

class UserGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: props.username,
    };
  }

  greeting = () => {
    this.setState((prevState, props) => ({
      greet: `Hello ${props.username}`,
    }));
  };

  render() {
    const { greet } = this.state;
    const { username } = this.props;
    return (
      <div>
        <h1>{username}</h1>
        <h1>{greet}</h1>
        <button
          type="button"
          onClick={this.greeting}
        >
          Greet
        </button>
      </div>
    );
  }
}

/* Input.defaultProps = {
  caption: 'default value displaying',
}; */
UserGreet.propTypes = {
  username: PropTypes.string,
};
UserGreet.defaultProps = {
  username: 'default name',
};

// export default Input;
export default UserGreet;
