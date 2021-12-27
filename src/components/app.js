import React, { createRef, PureComponent, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { _debounce } from 'lodash';
import '../index.css';

const Input = lazy(() => import('./input'));
const WeatherReport = lazy(() => import('./weather-report'));
const SetUnits = lazy(() => import('./set-units'));
const SearchResults = lazy(() => import('./search-results'));

class App extends PureComponent {
  state = {
    cities: [],
    invalidCity: null,
    currentCity: null,
    currentUnit: 'C',
  }
  baseURL = 'http://localhost:3000/weather-reports';
  inputText = createRef();

  searchLocations = async (keyword) => {
    if (!keyword.length) {
      this.setState({ cities: [], invalidCity: null })
      return
    }
    try {
      const res = await fetch(this.baseURL + `?name_like=${keyword}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState({ cities: json, invalidCity: !json.length ? keyword : null });
    } catch (error) {
    }
  }

  setUnits = (unit) => {
    const { currentCity } = this.state;
    let { temp, temp_max, temp_min } = currentCity;
    if (unit === 'F') {
      temp = Math.round((temp * 9 / 5) + 32);
      temp_max = Math.round((temp_max * 9 / 5) + 32);
      temp_min = Math.round((temp_min * 9 / 5) + 32);
    } else {
      temp = Math.round((temp - 32) * 5 / 9);
      temp_max = Math.round((temp_max - 32) * 5 / 9);
      temp_min = Math.round((temp_min - 32) * 5 / 9);
    }
    this.setState({ currentCity: { ...currentCity, temp, temp_max, temp_min }, currentUnit: unit });
  }

  searchCities = _.debounce(() => {
    this.searchLocations(this.inputText?.current?.value);
  }, 500);

  getWeather = async (cityId) => {
    const { currentCity } = this.state;
    if (currentCity?.id === cityId) {
      this.setState({ currentCity, cities: [] }, () => { this.inputText.current.value = '' });
      return true;
    }
    try {
      const res = await fetch(this.baseURL + `/${cityId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState({ currentCity: json, cities: [], invalidCity: null },
        () => {
          this.inputText.current.value = '';
          const { currentUnit } = this.state;
          if (currentUnit !== 'C') {
            this.setUnits(currentUnit);
          }
        }
      );
    } catch (error) {
    }
  }

  componentDidMount() {
    // setting Bangalore as default city
    this.getWeather(4);
  }

  render() {
    const { cities, invalidCity, currentCity, currentUnit } = this.state;
    return (
      <div className="w-full min-h-[100vh] bg-slate-100 flex flex-col items-center justify-start">
        <div className="w-[90vw] mt-4 flex flex-col sm:max-w-[90%] uppercase">
          <h3 className="mb-3 text-lg font-semibold border-b-2 border-red-600">WeatherWatch</h3>
          <div className="w-full flex justify-around relative">
            <div className="grow mr-1 bg-white px-5 py-3 rounded-md shadow">
              <Suspense fallback={<div className="is-loading">Input is loading...</div>}>
                <Input searchCities={this.searchCities} ref={this.inputText} />
              </Suspense>
            </div>
            <div className="w-32 bg-white px-5 py-3 rounded-md shadow">
              <Suspense fallback={<div className="is-loading">Set Unit is loading...</div>}>
                <SetUnits setUnits={this.setUnits} />
              </Suspense>
            </div>
            <Suspense fallback={''}>
              <SearchResults cities={cities} invalidCity={invalidCity} getWeather={this.getWeather} />
            </Suspense>
          </div>
          <div className="w-full bg-white mt-2 p-5 rounded-md relative shadow">
            {currentCity
              ?
              <Suspense fallback={<div className="is-loading">Weather report is loading...</div>}>
                <WeatherReport city={currentCity} currentUnit={currentUnit} />
              </Suspense>
              :
              <h3 className="normal-case text-sm">Weather report is loading...</h3>
            }
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);