import React, { Component, createRef } from 'react';
import cn from "classnames";

export default class FindWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: [],
      cityWeather: null,
    }
    this.inputText = createRef();
  }

  findWeather = async (event) => {
    try {
      event.preventDefault();
      const cityInputValue = this.inputText.current.value.toLowerCase();
      const res = await fetch(`http://localhost:3000/weather-info?city=${cityInputValue}`);
      const json = await res.json();

      this.setState(
        ({ weatherInfo }) => {
          return {
            cityWeather: json[0] || cityInputValue,
          }
        }, () => {
          this.inputText.current.value = '';
          this.inputText.current.focus();
        }
      );
    } catch (error) { }
  }

  render() {
    const { weatherInfo, cityWeather } = this.state;
    return (
      <div>
        <div className="bg-slate-300 flex flew-with-400 flex-col py-10">
          <h1 className="text-center font-bold uppercase text-orange-900">Weather information</h1>
          <form className="flex justify-center my-5" onSubmit={this.findWeather}>
            <input type="text" className="input mr-5" ref={this.inputText} placeholder="City Name" required></input>
            <button type="submit" className="btn-primary">Find Weather</button>
          </form>
          <div className="flex justify-center font-bold">
            {cityWeather !== null && (cityWeather.city ?
              <div className="capitalize text-green-900">{cityWeather.city} temperature = {cityWeather.temp} °C</div>
              : <div className="text-pink-900">{cityWeather} is Not found in report</div>)}
          </div>
        </div>
      </div>
    )
  }
}

