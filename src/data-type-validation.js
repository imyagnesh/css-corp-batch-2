import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataTypeValidation extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h3>Name: {name}</h3>
        <h4>Age: {age}</h4>
      </div>
    );
  }
}

DataTypeValidation.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

DataTypeValidation.defaultProps = {
  name: 'Seeni (default value)',
};
