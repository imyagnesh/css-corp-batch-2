import React, { Component, createRef } from 'react';
import './weatherStyle.css';
import WeatherForm from './weatherForm';
import WeatherResult from './weatherResult';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityMatches: '',
    };
    this.inputRef = createRef();
  }

  weatherForecast = async (event) => {
    event.preventDefault();
    try {
      let api = 'http://localhost:3000/weather-info';
      let res = await fetch(api, {
        method: 'GET',
      });
      const json = await res.json();
      this.setState(
        () => {
          const currentCity = this.inputRef.current.value;
          const result = json.find(
            (item) => item.city.toLowerCase() === currentCity.toLowerCase(),
          );
          return {
            cityMatches: result ? result : 'No matches found',
          };
        },
        () => {
          this.inputRef.current.value = '';
        },
      );
    } catch (error) {}
  };

  render() {
    const { cityMatches, noMatches } = this.state;
    return (
      <div className="h-screen flex flex-col justify-center">
        <h1 className="text-center my-2 text-lg font-bold">Weather Forecast</h1>
        <WeatherForm
          weatherForecast={this.weatherForecast}
          ref={this.inputRef}
        />
        <WeatherResult cityMatches={cityMatches} noMatches={noMatches} />
      </div>
    );
  }
}
