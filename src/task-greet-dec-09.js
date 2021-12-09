import React, { Component } from 'react';

export class Greet extends Component {
  state = {
    greet: 'Seenivasan Balakrishnan',
  };

  greetMe = () => {
    console.log('Greet ME');
    this.setState(({ greet }) => ({
      greet: `Hello ${greet}`,
    }));
  };

  render() {
    return (
      <div>
        <h1>Greet Component</h1>
        <h2>{this.state.greet}</h2>
        <button type="button" onClick={this.greetMe}>
          Greet Me
        </button>
        <hr />
      </div>
    );
  }
}
