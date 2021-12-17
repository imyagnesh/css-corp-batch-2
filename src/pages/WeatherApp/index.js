import React, { Component, createRef, lazy, Suspense } from 'react';
import cn from 'classnames';
import './weatherApp.css';

const WeatherForm = lazy(() => import('./weatherForm'));
const WeatherResult = lazy(() => import('./WeatherResult'));

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      cityToFilter: '',
    };

    this.inputText = createRef();
  }

  filterCity = (event) => {
    event.preventDefault();
    const cityName = this.inputText.current.value.toString().trim();
    const formatCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1)
    this.inputText.current.value = '';
    this.inputText.current.focus();
    this.loadWeatherInfo(formatCityName);
  };

  loadWeatherInfo = async (cityName) => {
    try {
      let url = `http://localhost:3000/weather-info?city=${cityName}`;
      const res = await fetch(url);
      const json = await res.json();
      this.setState({
        city: json?.length ? json : [],
        cityToFilter: cityName
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { city, cityToFilter } = this.state;
    return (
      <div className="bg-slate-200 h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Weather App</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <WeatherForm filterCity={this.filterCity} ref={this.inputText}/>
        </Suspense>
        <Suspense fallback={<h1>Loading results...</h1>}>
          <WeatherResult filteredCity={city} cityToFilter={cityToFilter}/>
         </Suspense>
      </div>
    );
  }
}
