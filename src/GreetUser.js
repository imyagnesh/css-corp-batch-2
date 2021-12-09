import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child1 from './child1';
import Child2 from './child2';

class GreeetUser extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        firstName: 'Yagnesh',
        lastName: 'Modh',
        greet: ''
    };
    greetMe = () => {
        // const { counter } = this.state;
        // this.setState({
        //   counter: counter + 1,
        // });

        this.setState(() => ({
            greet: 'Hello',
        }));
    };
    render() {
        const { firstName, lastName, greet } = this.state;
        return (
            <div>
                <h2>{greet} {firstName} {lastName}</h2>
                <button type="button" onClick={this.greetMe}>Say Hello</button>
                <Child1></Child1>
                <Child2></Child2>
            </div>
        );
    }
}
export default GreeetUser;