import React, { createContext, PureComponent } from 'react';

export const WeatherContext = createContext();

export const WeatherConsumer = WeatherContext.Consumer;

export class WeatherProvider extends PureComponent {
  state = {
    city: '',
    description: '',
    currentTemp: '',
    maxTemp: '',
    minTemp: '',
    windDct: '',
    units: 'F',
    changeUnit: 'farenheit',
    windSpeed: '',
    pressure: '',
    humidity: '',
    feelsLike: '',
    cities: [],
    name: [],
    citySearch: false,
    cityNames: [
      'Hyderabad',
      'chennai',
      'Bangalore',
      'Delhi',
      'kolkata',
      'Himachal',
    ],
  };

  async componentDidMount() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=333458e05b25c5e69a7c22d64b7bc47f&units=imperial',
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          city: json.name,
          description: json.weather[0].description,
          currentTemp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windDct: json.wind.deg,
          feelsLike: json.main.feels_like,
        });
      });
  }

  componentDidUpdate(previousState) {
    const { citySearch } = this.state;
    if (document.getElementById('city-button') !== null) {
      if (previousState.citySearch !== citySearch) {
        document.getElementById('city-button').style.display = 'inline-block';
      }
      if (citySearch === true) {
        document.getElementById('city-button').style.display = 'none';
      }
    }
  }

  getWeatherResults = (event) => {
    const currentCity = event.target.value;
    this.setState(
      ({ cityNames }) => {
        const location = cityNames.filter((item) => item.toLowerCase().startsWith(currentCity.toLowerCase()));
        return {
          name: location,
        };
      },
      () => {
        this.setState({ citySearch: false });
      },
    );
  };

  getWeather = _.debounce(this.getWeatherResults, 500);

  changeUnits = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({ changeUnit: value });
    if (value === 'celcius') {
      console.log(value);
      this.setState(({ }) => ({
        maxTemp: max,
        minTemp: min,
        currentTemp: current,
        feelsLike: feels,
        units: 'C',
      }));
    } else {
      this.setState(({ }) => ({
        maxTemp: max,
        minTemp: min,
        currentTemp: current,
        feelsLike: feels,
        units: 'F',
      }));
    }
  };

  searchCities = (item) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?appid=333458e05b25c5e69a7c22d64b7bc47f&units=imperial&q=${item}`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          cities: [json],
          city: json.name,
          description: json.weather[0].description,
          currentTemp: json.main.temp,
          maxTemp: json.main.temp_max,
          minTemp: json.main.temp_min,
          pressure: json.main.pressure,
          humidity: json.main.humidity,
          windSpeed: json.wind.speed,
          windDct: json.wind.deg,
          feelsLike: json.main.feels_like,
          citySearch: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { children } = this.props;
    const {
      city,
      description,
      currentTemp,
      units,
      windSpeed,
      maxTemp,
      minTemp,
      windDct,
      pressure,
      humidity,
      cities,
      name,
      changeUnit,
      feelsLike,
    } = this.state;

    return (
      <WeatherContext.Provider
        value={{
          city,
          description,
          currentTemp,
          units,
          windSpeed,
          maxTemp,
          minTemp,
          windDct,
          pressure,
          humidity,
          cities,
          name,
          changeUnit,
          feelsLike,
          getWeatherResults: this.getWeather,
          changeUnits: this.changeUnits,
          currentUnit: changeUnit,
          searchCities: this.searchCities,
        }}
      >
        {children}
      </WeatherContext.Provider>
    );
  }
}
