import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// render method will call when ever state or props value change

// React Life Cycle Method

// 4 stages of React life cycle method

// Mounting
// 1. Constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// Updating
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate(MIMP)
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate

// Unmounting
// componentWillUnmount

// Error
//
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
      user: {
        name: 'yagnesh',
        age: 30,
      },
    };
    // this.setCounter(5);
    // Pass user info to server through HTTP Call
    // this.changeGreet = this.changeGreet.bind(this);
  }

  //   state = {
  //     counter: 0,
  //   };

  //  calls everytime when value or state value change
  // static getDerivedStateFromProps(props, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   if (!prevState.greet) {
  //     return {
  //       greet: `Hello, ${props.name}`,
  //     };
  //   }
  //   return null;
  // }

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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 'hello from getSnapshotBeforeUpdate';
  }

  // Manipulate dom base on prev Props and prev State
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    // log error on server
  }

  setCounter = async (value) => {
    try {
      this.setState(({ counter }) => ({
        counter: counter + value,
      }));
    } catch (error) {}
  };

  changeUserName = () => {
    try {
      this.setState(({ user }) =>
        //   user.name = 'Virat';
        ({
          user: { ...user, name: 'Virat' },
        }));
    } catch (error) {}
  };

  render() {
    const { counter, greet, user, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }
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
        <button type="button" onClick={this.changeUserName}>
          Change User name
        </button>
        <h2>{user.name}</h2>
        <Child1 counter={counter} />
        {counter < 10 && <Child2 userInfo={user} />}
        <button
          type="button"
          onClick={() => {
            this.setState({
              stateColor: 'blue',
            });
          }}
        >
          Change Color
        </button>
      </div>
    );
  }
}

App.getDerivedStateFromProps = (props, state) => ({
  greet: `Hello, ${props.name} ${state.stateColor || props.color}`,
  stateColor: props.color,
});

export default App;
