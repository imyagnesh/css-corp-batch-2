import React, { Component, createRef } from 'react';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultValue: '',
      weatherDetails: [
        { id: 1, city: 'Hyderabad', temp: '24°C' },
        { id: 2, city: 'Chennai', temp: '30°C' },
        { id: 3, city: 'Bangalore', temp: '27°C' },
        { id: 4, city: 'Goa', temp: '35°C' },
      ],
    };
    this.inputRef = createRef();
  }

  checkWeather = (event) => {
    event.preventDefault();
    this.setState(({ weatherDetails }) => {
      const city = this.inputRef.current.value;
      const weatherCity = weatherDetails.find((x) => x.city.toLowerCase() === city.toLowerCase());
      return {
        resultValue: weatherCity ? `${city} city's temp is ${weatherCity.temp}` : 'No city Found',
      };
    }, () => {
      this.inputRef.current.value = '';
    });
  };

  render() {
    const { resultValue } = this.state;
    return (
      <div className="h-screen flex flex-col bg-gray-100">
        <div className="w-1/2 my-10 mx-auto h-64 bg-white shadow-md">
          <h1 className="text-center my-2 p-3 text-lg text-black font-bold">Get Your city Weather</h1>
          <form className="flex justify-center my-2" onSubmit={this.checkWeather}>
            <input type="text" placeholder="Search your city here" className="w-5/12 p-1 text-lg border border-solid border-gary-100 rounded-none focus:outline-none focus:border-blue-500" ref={this.inputRef} />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Check
            </button>
          </form>
          <p className="text-center">{resultValue}</p>
        </div>
      </div>
    );
  }
}
