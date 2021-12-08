import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    setCounter = (event) => {
        const btnType = event.target.name;
        console.log(btnType);
        this.setState(({ counter }) => ({
            counter: btnType === 'incr' ? counter + 1 : counter - 1,
        }))
    }
    // incrementCounter = () => {
    //     // const { counter } = this.state;
    //     // this.setState({
    //     //     counter: counter + 1,
    //     // })

    //     this.setState(({ counter }) => ({
    //         counter: counter + 1,
    //     }))
    // }
    // decrementCounter = () => {
    //     // const { counter } = this.state;
    //     // this.setState({
    //     //     counter: counter + 1,
    //     // })

    //     this.setState(({ counter }) => ({
    //         counter: counter - 1,
    //     }))
    // }

    test() { }
    render() {
        const { title, caption } = this.props;
        const { counter } = this.state;
        return (
            <div>
                <h1>Hello from class component</h1>
                <h2>{title}</h2>
                <h2 style={{ backgroundColor: 'red', color: '#fff' }}>{caption}</h2>
                <p>{counter}</p>
                <button type="button" name="incr" onClick={this.setCounter}>Increment Counter</button>
                <button type="button" name="decr" onClick={this.setCounter}>Decrement Counter</button>
            </div>
        )
    }
}

Input.Proptypes = {
    title: Proptypes.string.isRequired,
    caption: Proptypes.string
}

Input.defaultProps = {
    caption: 'Hello Default Props',
}

export default Input;