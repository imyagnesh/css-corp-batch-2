import React, { Component, createRef, lazy, Suspense } from 'react';
import Loading from './pages/WeatherApp/loading';
import { _debounce } from 'lodash';

const Input = lazy(() => import('./pages/WeatherApp/input'));
const SetUnits = lazy(() => import('./pages/WeatherApp/setUnits'));
const WeatherReport = lazy(() => import('./pages/WeatherApp/weatherReport'));
const SearchResults = lazy(() => import('./pages/WeatherApp/searchResults'));

class App extends Component {
  constructor(props) {
    super(props);
    this.apiURL = 'https://api.weatherserver.com/weather/';
    this.inputRef = createRef();
    this.state = {
      cityDetails: {},
      defaultCityID: '1277333',
      defaultMetrics: 'C',
      citySearchResults: {},
      hasCity: false
    }
  }
  componentDidMount() {
    this.getWeatherDetails(this.state.defaultCityID);
  }

  getWeatherDetails = async(val) => {
    try {
      const response = await fetch(this.apiURL+'current/'+val+'/'+this.state.defaultMetrics, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const cityDetailsInJson = await response.json();
      this.setState({
        citySearchResults: {},
        cityDetails: cityDetailsInJson,
        hasCity: true
      },() => {
        this.inputRef.current.value = '';
      })
    } catch (error) {
    }
  }

  getCity = _.debounce((event) => {
    const getCityVal = this.inputRef.current.value;
    if (getCityVal.length >= 2) {
      this.getCityWeatherReport(getCityVal);
    } else {
      this.setState({
        citySearchResults: {},
      })
    }
  },500)

  getCityWeatherReport = async(val) => {
    try {
      const response = await fetch(this.apiURL+'cities/'+val, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      const citySearchResults = await response.json();
      this.setState({
        citySearchResults,
      });
    } catch (error) {
    }
  }

  changeTemperatureMetrics = (e) => {
    const temp = e.target.value;
    this.setState({
      defaultMetrics: temp
    })
  }

  render() {
    const {cityDetails, defaultCityID, defaultMetrics, citySearchResults, hasCity } = this.state;
    return (
      <div className='weather-app'>
        <div className='weather-app-container'>
          <h1 className='weather-app-title'>Weather Watch</h1>
          <div className='weather-app-search'>
            <Suspense fallback={<Loading />}>
              <Input ref={this.inputRef} getCity={this.getCity} />
              <SetUnits changeTemperatureMetrics={this.changeTemperatureMetrics} />
            </Suspense>
          </div>
          <Suspense fallback={<Loading />}>
            {citySearchResults?.results && <SearchResults getWeatherDetails={this.getWeatherDetails} citySearchResults={citySearchResults}  />}
          </Suspense>
          {
            !hasCity && ( <Loading /> )
          }
          <Suspense fallback={<Loading />}>
            <WeatherReport weatherDetails={cityDetails} temperature={defaultMetrics} />
          </Suspense>
        </div>
      </div>
    )
  }
}
export default App;