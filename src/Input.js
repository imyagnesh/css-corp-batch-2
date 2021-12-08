import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Props are the immutable
// component will only rerender when it is immutable
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    // const { counter } = this.state;
    // this.setState({
    //   counter: counter + 1,
    // });

    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    const { title, caption } = this.props;
    const { counter } = this.state;

    return (
      <div>
        <h1 className="heading">Hello From class component</h1>
        <h2 style={{ backgroundColor: 'red', color: '#fff' }}>{title}</h2>
        <h2>{caption}</h2>
        <p>{counter}</p>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }
}

// const Input = ({ title, caption }) => (
//   <div>
//     <h1 className="heading">{title}</h1>
//     <h2
//       style={{
//         backgroundColor: false ? 'red' : 'blue',
//         color: '#fff',
//       }}
//     >
//       {caption}
//     </h2>
//     <input type="checkbox" />
//   </div>
// );

Input.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

Input.defaultProps = {
  caption: '',
};

export default Input;
