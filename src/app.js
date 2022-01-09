import React, { Component } from 'react';

class App extends Component {
  async componentDidMount() {
    const res = await fetch('https://api.weatherserver.com/weather/cities/ch');
    const json = await res.json();
    console.log(json);

    const res1 = await fetch(
      'https://api.weatherserver.com/weather/current/4887398/F',
    );
    const json1 = await res1.json();
    console.log(json1);
  }

  render() {
    return (
      <div className="weather-app">
        <h1>WeatherWatch</h1>
      </div>
    );
  }
}

export default App;
