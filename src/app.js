import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

const Input = lazy(() => import('./components/Input'));
const SetUnits = lazy(() => import('./components/SetUnits'));
const SearchResults = lazy(() => import('./components/SearchResults'));
const WeatherReport = lazy(() => import('./components/WeatherReport'));
import Loading from './components/Loading';

import cityInfo from '../__mockData__/cityDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDetails: {},
      httpStatus: [],
      city: 'Bengaluru',
      cityDetails: [],
      cityInput: '',
      temperatureUnits: 'metric'
    }
    this.cityInputRef = React.createRef();
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=333458e05b25c5e69a7c22d64b7bc47f';
  }

  setRequestStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => {
      const index = httpStatus.findIndex((x) => x.type === type && x.id === id);
      const data = { type, status: 'REQUEST', id };
      if (index === -1) {
        return {
          httpStatus: [...httpStatus, data],
        };
      }
      return {
        httpStatus: [
          ...httpStatus.slice(0, index),
          data,
          ...httpStatus.slice(index + 1),
        ],
      };
    });
  };

  setSuccessStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.filter((x) => !(x.type === type && x.id === id)),
    }));
  };

  setFailStatus = ({ type, payload, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.map((x) => {
        if (x.type === type && x.id === id) {
          return { ...x, status: 'FAIL', payload };
        }
        return x;
      }),
    }));
  };

  loadCityDetails = () => {
    this.setState(({cityDetails}) => {
      return {
        cityDetails: cityInfo
      }
    });
  };

  filterCity = (input) => {
    return this.state.cityDetails.filter(
      cityDetails => input.toString().trim() && cityDetails.name.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
  }

  updateTemperatureUnits = (event) => {
    const selectedOption = event.target.value;
    this.setState(({temperatureUnits}) => {
      return {
        temperatureUnits: selectedOption
      }
    }, this.searchLocations);
  }

  searchText = (event) => {
    const searchTextValue = this.cityInputRef.current.value;
    if (searchTextValue) {
      this.setState(({cityInput}) => {
        return {
          cityInput: searchTextValue
        }
      });
      this.cityInputRef.current.focus();
    }
  }

  searchLocations = async (city) => {
    const cityName = city ? city : this.state.city;
    this.setState(({city, cityInput}) => ({
        city: cityName,
        cityInput: ''
    }));
    if (this.cityInputRef.current) {
      this.cityInputRef.current.value = '';
    }
    await this.getWeather(cityName, this.state.temperatureUnits);
  };

  getWeather = async (city, temperatureUnits) => {
    const type = 'LOAD_WEATHER_DETAILS';
    try {
      this.setRequestStatus({ type });
      let url = this.baseUrl + `&q=${city}&units=${temperatureUnits}`;
      const res = await fetch(url);
      const json = await res.json();
      this.setState({
        weatherDetails: json,
      });
      this.setSuccessStatus({ type });
    } catch (error) {
      this.setFailStatus({ type, payload: error });
    }
  };

  async componentDidMount() {
    this.loadCityDetails();
    this.searchLocations();
  }

  render() {
    const {cityInput, weatherDetails, temperatureUnits, httpStatus, city} = this.state;
    const filteredCity = this.filterCity(cityInput);
    const fail = httpStatus.some((httpStatusObj) => httpStatusObj.status === 'FAIL');
    return (
      <div className='w-1/2 m-auto p-3 bg-slate-50'>
        <div className='weather-app-wrapper p-3 bg-zinc-200'>
          <div className='pt-3 pb-1 text-base font-semibold border-b border-solid border-red-600 w-full'>Weather Watch</div>
          <div className='flex p-3 w-full gap-5 bg-white mt-3'>
            <Suspense fallback={<Loading />}>
              <Input searchText={this.searchText} ref={this.cityInputRef}/>
            </Suspense>
            <Suspense fallback={<Loading />}>
              <SetUnits temperatureUnits={temperatureUnits} updateTemperatureUnits={this.updateTemperatureUnits}/>
            </Suspense> 
          </div>
          <Suspense fallback={<Loading />}>
              {!fail && filteredCity.length > 0 && <SearchResults searchLocations={this.searchLocations} data={filteredCity}/>}
            </Suspense>
            <Suspense fallback={<Loading />}>
              {fail && <div className="error-panel">Network error</div>}
              {!fail && <WeatherReport data={weatherDetails} temperatureUnits={temperatureUnits} city={city}/>}
            </Suspense>
        </div>
        
      </div>
    )
  }
}

export default App;
