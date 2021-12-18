import React, { Component, createRef } from 'react';
import './weather.css';
import cn from 'classnames';


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityObjList: [],
      result: ''
    };

    this.inputText = createRef();
  }

  searchCity = async (city) => {
    const resultStr = await fetch(`http://localhost:3000/weather-info?city=${city}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const resultObj = await resultStr.json();
    console.log(resultObj);
    this.setState(() => {
      return {
        resultText: (resultObj[0]) ? `Temperature in the city : ${resultObj[0].city} is :  ${resultObj[0].temp}` : `${city} not found`
      }
    });
  }

  searchWeather = (event) => {
    event.preventDefault();
    let enteredCity = this.inputText.current.value;
    this.searchCity(enteredCity.toLowerCase());
  }

  render() {
    return (
      <div className="bg-[#FAFAFA] h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Weather Search app</h1>
        <form className="flex justify-center my-2" onSubmit={this.searchWeather}>
          <input type="text" className="placeholder:italic placeholder:text-gray-400 block border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter a city name... " ref={this.inputText} />
          <button type="submit" className="btn-primary" >
            Search
          </button>
        </form>
        <span className={cn('text-center', {})}   > {this.state.resultText}</span>
      </div>
    );
  }
}
