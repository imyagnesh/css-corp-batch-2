import React, { Component, createRef, lazy, Suspense } from 'react';
import cn from 'classnames';
import './weatherApp.css';

const WeatherForm = lazy(() => import('./weatherForm'));
const WeatherResult = lazy(() => import('./WeatherResult'));

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList:[],
      cityToFilter: '',
    };

    this.inputText = createRef();
  }

  filterCity = (event) => {
    event.preventDefault();
    this.setState(
      ({ cityToFilter }) => {
        const cityName = this.inputText.current.value;
        return {
          cityToFilter: cityName.toString().trim(),
        };
      },
      () => {
        this.inputText.current.value = '';
        this.inputText.current.focus();
      },
    );
  };
  
  async componentDidMount() {
    this.loadWeatherInfo();
  }

  loadWeatherInfo = async () => {
    try {
      let url = 'http://localhost:3000/weather-info';
      const res = await fetch(url);
      const json = await res.json();
      this.setState({
        cityList: json,
      });
    } catch (error) {
      console.error(error);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.cityToFilter != nextState.cityToFilter;
    }
  render() {
    console.log('render called');
    const { cityList, cityToFilter } = this.state;
    const filteredCity = cityList.find(({city}) => city.toLowerCase() === cityToFilter.toLowerCase());
    return (
      <div className="bg-slate-200 h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">Weather App</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <WeatherForm filterCity={this.filterCity} ref={this.inputText}/>
        </Suspense>
        <Suspense fallback={<h2>Loading results...</h2>}>
          <WeatherResult filteredCity={filteredCity} cityToFilter={cityToFilter}/>
        </Suspense>
      </div>
    );
  }
}
