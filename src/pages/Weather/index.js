import React, { Component, createRef } from 'react';
import './weather.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherreport: "",
      Citydetails: [{ id: 1, city: "Pune", temp: 30 },
      { id: 2, city: "Chennai", temp: 28 },
      { id: 3, city: "Mumbai", temp: 35 },
      { id: 4, city: "Banglore", temp: 30 }]
    };
    this.inputText = createRef();
  }

  cityWeatherreport = (event) => {
    event.preventDefault();
    const city = this.inputText.current.value;
    const weatherCity = this.state.Citydetails.find(x => x.city);
    this.setState(({ Citydetails, weatherreport }) => ({
      Citydetails,
      weatherreport: weatherCity ? ` ${city} Temperature is ${weatherCity.temp} °C` : 'City is not available in list',
    })
    )
  }
  render() {
    const { Citydetails, weatherreport } = this.state;
    return (
      <div className="h-screen flex flex-col">
        <h1 className="text-center m-2">Weather report</h1>
        <form className="flex justify-center my-2" onSubmit={this.cityWeatherreport}>
          <input type="text" className="form-input mx-2 border" ref={this.inputText} />
          <button type="submit" className="btn-primary">Search</button>
        </form>
        <p className='text-center'>{weatherreport}</p>
      </div>)
  }
}