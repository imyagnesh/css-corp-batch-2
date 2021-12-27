import React, { createRef, PureComponent, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { _debounce } from 'lodash';
import '../index.css';

const Input = lazy(() => import('./input'));
const WeatherReport = lazy(() => import('./weather-report'));
const SetUnits = lazy(() => import('./set-units'));
const SearchResults = lazy(() => import('./search-results'));

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      invalidCity: null,
      currentCity: null,
      currentUnit: 'C',
      apiStatus: []
    }
    this.baseURL = 'http://localhost:3000/weather-reports';
    this.inputText = createRef();
  }

  searchLocations = async (keyword) => {
    if (!keyword.length) {
      this.setState({ cities: [], invalidCity: null })
      return
    }
    const apiType = "SEARCH_LOCATION";
    try {
      this.addRequestAPIStatus(apiType);
      const res = await fetch(this.baseURL + `?name_like=${keyword}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState({ cities: json, invalidCity: !json.length ? keyword : null });
      this.removeSuccessAPIStatus(apiType);
    } catch (error) {
      this.setFailedAPIStatus({ type: apiType, payload: error });
    }
  }

  getWeather = async (cityId) => {
    const { currentCity } = this.state;
    if (currentCity?.id === cityId) {
      this.setState({ currentCity, cities: [] }, () => {
        // this.inputText.current.value = ''
      });
      return true;
    }
    const apiType = 'GET_WEATHER';
    try {
      this.addRequestAPIStatus(apiType);
      const res = await fetch(this.baseURL + `/${cityId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState({ currentCity: json, cities: [], invalidCity: null }, () => {
        // this.inputText.current.value = '';
        const { currentUnit } = this.state;
        if (currentUnit !== 'C') {
          this.setUnits(currentUnit);
        }
      });
      this.removeSuccessAPIStatus(apiType);
    } catch (error) {
      this.setFailedAPIStatus({ type: apiType, payload: error });
    }
  }

  searchCities = _.debounce((e) => {
    e.preventDefault();
    this.searchLocations(this.inputText?.current?.value);
  }, 500);

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

  addRequestAPIStatus = (type) => {
    this.setState(({ apiStatus }) => {
      const index = apiStatus.findIndex(x => x.type === type);
      const apiData = { type, status: 'REQUEST' };
      return {
        apiStatus: (index === -1)
          ? [...apiStatus, apiData]
          : [
            ...apiStatus.slice(0, index),
            apiData,
            ...apiStatus.slice(index + 1)
          ]
      }
    });
  }

  removeSuccessAPIStatus = (type) => {
    this.setState(({ apiStatus }) => {
      const index = apiStatus.findIndex(x => x.type === type);
      return {
        apiStatus: (index === -1)
          ? apiStatus
          : [...apiStatus.slice(0, index), ...apiStatus.slice(index + 1)]
      }
    });
  }

  setFailedAPIStatus = ({ type, payload }) => {
    this.setState(({ apiStatus }) => {
      const index = apiStatus.findIndex(x => x.type === type);
      return {
        apiStatus: (index === -1)
          ? apiStatus
          : [
            ...apiStatus.slice(0, index),
            { ...apiStatus[index], status: 'FAILED', payload },
            ...apiStatus.slice(index + 1)
          ]
      }
    });
  }

  componentDidMount() {
    // setting Bangalore as default city
    this.getWeather(4);
  }

  render() {
    const { cities, invalidCity, currentCity, currentUnit, apiStatus } = this.state;

    const { searchLocationAPIStatus, getWeatherAPIStatus } = apiStatus.reduce((previousValue, currentValue) => {
      if (currentValue.type === 'SEARCH_LOCATION')
        return { ...previousValue, searchLocationAPIStatus: currentValue }
      return { ...previousValue, getWeatherAPIStatus: currentValue }
    }, {});

    return (
      <div className="w-full min-h-[100vh] bg-slate-100 flex flex-col items-center justify-start">
        <div className="w-[90vw] mt-4 flex flex-col sm:max-w-[90%] uppercase">
          <h3 className="mb-3 text-lg font-semibold border-b-2 border-red-600 normal-case">Weather Watch</h3>
          <div className="w-full flex justify-around relative">
            <div className="grow min-h-[52px] bg-white px-5 py-3 mr-1 rounded-md relative shadow">
              <Suspense fallback={<div className="is-loading" />}>
                <Input searchCities={this.searchCities} ref={this.inputText} apiStatus={searchLocationAPIStatus} />
              </Suspense>
            </div>
            <div className="w-32 min-h-[52px] bg-white px-5 py-3 rounded-md relative shadow">
              <Suspense fallback={<div className="is-loading" />}>
                <SetUnits setUnits={this.setUnits} apiStatus={searchLocationAPIStatus} />
              </Suspense>
            </div>
            <Suspense fallback={''}>
              <SearchResults cities={cities} invalidCity={invalidCity} apiStatus={getWeatherAPIStatus} getWeather={this.getWeather} />
            </Suspense>
          </div>
          <div className="w-full bg-white min-h-[52px] mt-2 p-5 rounded-md relative shadow">
            {currentCity
              ?
              <Suspense fallback={<div className="is-loading" />}>
                <WeatherReport city={currentCity} currentUnit={currentUnit} apiStatus={getWeatherAPIStatus} />
              </Suspense>
              :
              <div className="is-loading" />
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