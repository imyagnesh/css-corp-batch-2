import React, { createRef, PureComponent, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { _debounce } from 'lodash';
import '../index.css';
import Overlay from './overlay';

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
      currentUnit: 'celsius',
      apiStatus: []
    }
    this.baseURL = 'https://my-json-server.typicode.com/SeenivasanBalakrishnan/weather-api/';
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
      const res = await fetch(this.baseURL + `cities?name_like=${keyword}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState({ cities: json, invalidCity: !json?.length ? keyword : null });
      this.removeSuccessAPIStatus(apiType);
    } catch (error) {
      this.setFailedAPIStatus({ type: apiType, payload: error });
    }
  }

  getWeather = async (cityId, unit) => {
    let { currentUnit } = this.state;
    unit = unit || currentUnit;
    const apiType = 'GET_WEATHER';
    try {
      this.addRequestAPIStatus(apiType);
      const res = await fetch(this.baseURL + `cities/${cityId}/report/?_embed=${unit}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const json = await res.json();
      this.setState({ currentCity: json[0], currentUnit: unit, cities: [], invalidCity: null }, () => {
        this.inputText.current.value = '';
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
    this.getWeather(currentCity.id, unit);
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
    const { searchLocationAPIStatus, getWeatherAPIStatus, allApiStatus } = apiStatus.reduce((previousValue, currentValue) => {
      const type = (currentValue.type === 'SEARCH_LOCATION') ? 'searchLocationAPIStatus' : 'getWeatherAPIStatus';
      return { ...previousValue, [type]: currentValue, allApiStatus: [...previousValue.allApiStatus, currentValue] }
    }, { allApiStatus: [] });

    return (
      <div className="wrapper">
        <div className="container">
          <h3 className="title">Weather Watch</h3>
          <div className="w-full flex justify-around relative">
            <div className="card w-full mr-1">
              <Suspense fallback={<div className="is-loading" />}>
                <Input searchCities={this.searchCities} ref={this.inputText} apiStatus={searchLocationAPIStatus} />
              </Suspense>
            </div>
            <div className="card w-48 md:w-30">
              <Suspense fallback={<div className="is-loading" />}>
                <SetUnits setUnits={this.setUnits} apiStatus={searchLocationAPIStatus} />
              </Suspense>
            </div>
            <Suspense fallback={''}>
              <SearchResults cities={cities} getWeather={this.getWeather} invalidCity={invalidCity} allApiStatus={allApiStatus} />
            </Suspense>
          </div>
          <div className="card weather-report">
            {currentCity === null
              ? <div>{<div className="info-text">Weather report comes here...</div>}</div>
              :
              <>
                <Suspense fallback={<div className="is-loading" />}>
                  <WeatherReport city={currentCity} currentUnit={currentUnit} />
                </Suspense>
                {getWeatherAPIStatus?.status === 'REQUEST' && <Overlay className="is-loading" />}
                {getWeatherAPIStatus?.status === 'FAILED' && <Overlay className="error-panel" />}
              </>
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