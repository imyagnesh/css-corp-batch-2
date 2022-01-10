import React, { PureComponent, Suspense, lazy } from 'react';

const Input = lazy(() => import('./components/Input'));
const SetUnits = lazy(() => import('./components/SetUnits'));
const SearchResults = lazy(() => import('./components/SearchResults'));
const WeatherReport = lazy(() => import('./components/WeatherReport'));

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      httpStatus: [],
      cityList: [],
      weatherReport: {},
      unit: 'C', // deafult unit
      cityId: '1277333', // deafult city Id
    };
    this.inputRef = React.createRef();
  }

  // Set Request Status
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

  // Set Success Status
  setSuccessStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.filter((x) => !(x.type === type && x.id === id)),
    }));
  };

  // Set Fail Status
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

  // Typeahead Search
  searchLocations = async (e) => {
    const type = 'LOAD_CITY_LIST';
    try {
      const cityName = this.inputRef.current.value;
      this.setRequestStatus({ type });
      const res = await fetch(`https://api.weatherserver.com/weather/cities/${cityName}`);
      const json = await res.json();
      this.setState({ cityList: json.results });
      this.setSuccessStatus({ type });
    } catch (error) {
      this.setFailStatus({ type, payload: error });
    }
  };

  // Get Weather
  getWeather = async () => {
    const type = 'LOAD_WEATHER_REPORT';
    try {
      const { cityId, unit } = this.state;
      this.setRequestStatus({ type });
      const res = await fetch(`https://api.weatherserver.com/weather/current/${cityId}/${unit}`);
      const json = await res.json();
      this.setState({ weatherReport: json });
      this.inputRef.current.focus();
      this.setSuccessStatus({ type });
    } catch (error) {
      this.setFailStatus({ type, payload: error });
    }
  };

  // Load default city
  async componentDidMount() {
    this.getWeather();
  }

  // Set City
  setCity = (cityId) => {
    this.setState({ cityId }, this.getWeather);
  };

  // Set Unit
  setUnit = (unit) => {
    this.setState({ unit }, this.getWeather);
  };

  render() {
    const { cityList, weatherReport, unit, httpStatus } = this.state;
    const failture = httpStatus.some((httpStatusObj) => httpStatusObj.status === 'FAIL');
    return (
      <div className="weather-app">
        <h1>WeatherWatch:</h1>
        <Suspense fallback={<div className="is-loading" />}>
          <Input searchLocations={this.searchLocations} ref={this.inputRef} />
        </Suspense>
        <Suspense fallback={<div className="is-loading" />}>
          <SetUnits setUnit={this.setUnit} />
        </Suspense>
        <Suspense fallback={<div className="is-loading" />}>
          {cityList.length > 0 && <SearchResults cityList={cityList} setCity={this.setCity} />}
        </Suspense>
        <Suspense fallback={<div className="is-loading" />}>
          {failture && <div className='error-panel' />}
          {!failture && <WeatherReport weatherReport={weatherReport} unit={unit} />}
        </Suspense>
      </div>
    );
  }
}

export default App;
