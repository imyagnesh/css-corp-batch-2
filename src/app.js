import React, { Component } from 'react';

// render method will call when ever state or props value change

// React Life Cycle Method

// 4 stages of React life cycle method

// Mounting
// 1. Constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// Updating

// Unmounting

// Error
class App extends Component {
  // base on props set state value(optional)
  // Analytics
  // Bind Methods (optional arrow methods)
  // call only once
  constructor(props) {
    // call parent class contructor
    super(props);
    this.state = {
      counter: 0,
      greet: `Hello, ${props.name}`,
    };
    // this.setCounter(5);
    // Pass user info to server through HTTP Call
    this.changeGreet = this.changeGreet.bind(this);
  }

  //   state = {
  //     counter: 0,
  //   };

  //  calls everytime when value or state value change
  static getDerivedStateFromProps(props, prevState) {
    console.log('getDerivedStateFromProps');
    if (!prevState.greet) {
      return {
        greet: `Hello, ${props.name}`,
      };
    }
    return null;
  }

  // Manipulate Dom element
  // call only once
  // display data on page load
  // register event
  // Analytics
  componentDidMount() {
    console.log(document.getElementById('heading'));
    document.addEventListener('copy', () => {
      console.log('copied');
    });
    this.setCounter(5);
    // API call and get data
    // setstate data
  }

  setCounter = (value) => {
    this.setState(({ counter }) => ({
      counter: counter + value,
    }));
  };

  changeGreet = () => {
    this.setState((state, props) => {
      if (state.greet) {
        return {
          greet: `Hola ${props.name}`,
        };
      }
    });
  };

  render() {
    const { counter, greet } = this.state;
    return (
      <div>
        <h1 id="heading">{greet}</h1>
        <h2>{counter}</h2>
        <button type="button" onClick={() => this.setCounter(1)}>
          Increment Counter
        </button>
        <button type="button" onClick={() => this.setCounter(-1)}>
          Decrement Counter
        </button>
        <button type="button" onClick={this.changeGreet}>
          Change Greet Message
        </button>
      </div>
    );
  }
}

export default App;
