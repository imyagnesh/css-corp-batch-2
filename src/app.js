import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userName,
      buttonName: props.buttonName,
      success: true,
    };
  }

  greetClick() {
    this.setState({ success: true });
    this.greetUserToggle();
  }

  greetUserToggle = () => {
    this.setState(({ name }) => ({
      name: `Hello ${name}`,
      success: false,
      buttonName: "Greeted",
    }));
  };

  render() {
    const { name, success, buttonName } = this.state;
    let button;

    if (success) {
      button = (
        <button
          type="button"
          name="greet"
          success={success}
          onClick={() => this.greetClick()}
        >
          {buttonName}
        </button>
      );
    } else {
      button = (
        <button
          type="button"
          name="greeted"
        >
        {buttonName}
        </button>
        )
    }
    return (
      <div>
        <h2 style={{ color: '#000' }} success={success}>{name}</h2>
        {button}
      </div>
    );
  }
}

NameGreet.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default NameGreet;
