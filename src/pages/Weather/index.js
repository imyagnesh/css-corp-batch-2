import React, { Component, createRef } from 'react';
import cn from 'classnames';
import './weathesStyle.css';

export default class weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherreport: "",
      Citydetails: [{
        id: 1,
        city: "Chennai",
        temp: 28
      },
      {
        id: 2,
        city: "idukki",
        temp: 35
      },
      {
        id: 3,
        city: "Munnar",
        temp: 2
      },
      {
        id: 4,
        city: "Ooty",
        temp: 6
      }
      ]
    };
    this.inputText = createRef();
  }

  cityWeatherreport = (event) => {
    event.preventDefault();
    const city = this.inputText.current.value;
    const weatherCity = this.state.Citydetails.find(x => x.city.toUpperCase() === city.toUpperCase());
    this.setState(({ Citydetails, weatherreport }) => ({
      Citydetails,
      weatherreport: weatherCity ? ` ${city} Temperature is ${weatherCity.temp} °C` : 'Enter city is Not available ',
    })
    )
  }
  render() {
    const { Citydetails, weatherreport } = this.state;
    return (<div className="bg-[#d1ffbe] h-screen flex flex-col">
      <h1 className="text-center m-2">Weather report</h1>
      <form className="flex justify-center my-2" onSubmit={this.cityWeatherreport}>
        <input type="text" className="form-input mx-2" ref={this.inputText} />
        <button type="submit" className="btn-primary">Search</button>
      </form>
      <p className='text-center'>{weatherreport}</p>
    </div>)
  }
}
