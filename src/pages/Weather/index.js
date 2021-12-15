import React, { Component, createRef } from 'react';
import './weather.css';
import cn from 'classnames';


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityObjList: [{
        city: 'ahmedabad',
        temp: 33
      },
      {
        city: 'bangalore',
        temp: 27,

      },
      {
        city: 'chennai',
        temp: 31,

      },
      {
        city: 'delhi',
        temp: 40
      },
      {
        city: 'mumbai',
        temp: 35
      }
      ],
      resultText: ''
    };

    this.inputText = createRef();
  }

  searchCity = (city) => {
    this.setState(() => {
      const result = this.state.cityObjList.find((item) => city === item.city);
      return {
        resultText: (result) ? `Temperature in the city : ${result.city} is :  ${result.temp}` : `${city} not found`
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
