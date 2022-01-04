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
      'Chennai',
      'Chandigar',
      'Chicago',
      'Madurai',
      'Mumbai',
      'Bangalore',
      'Baroda',
      'Kashmir',
    ],
  };

  // componentDidMount Lifecycle method to fetch default Bangalore Data
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

  // componentDidUpdate Lifecycle menthod to hide button
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

  // Function to filter the matcher cities
  getWeatherResults = (event) => {
    const currentCity = event.target.value;
    this.setState(
      ({ cityNames }) => {
        const location = cityNames.filter((item) =>
          item.toLowerCase().startsWith(currentCity.toLowerCase()),
        );
        return {
          name: location,
        };
      },
      () => {
        //this.inputRef.current.value = '';
        this.setState({ citySearch: false });
      },
    );
  };

  getWeather = _.debounce(this.getWeatherResults, 500);

  // Function to change tempetatures(C to F and F to C)
  changeUnits = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({ changeUnit: value });
    if (value === 'celcius') {
      console.log(value);
      this.setState(({ maxTemp, minTemp, currentTemp, feelsLike }) => {
        const max = Math.round(((maxTemp - 32) * 5) / 9);
        const min = Math.round(((minTemp - 32) * 5) / 9);
        const current = Math.round(((currentTemp - 32) * 5) / 9);
        const feels = Math.round(((feelsLike - 32) * 5) / 9);
        return {
          maxTemp: max,
          minTemp: min,
          currentTemp: current,
          feelsLike: feels,
          units: 'C',
        };
      });
    } else {
      this.setState(({ maxTemp, minTemp, currentTemp, feelsLike }) => {
        const max = Math.round(maxTemp * (9 / 5) + 32);
        const min = Math.round(minTemp * (9 / 5) + 32);
        const current = Math.round(currentTemp * (9 / 5) + 32);
        const feels = Math.round(feelsLike * (9 / 5) + 32);
        return {
          maxTemp: max,
          minTemp: min,
          currentTemp: current,
          feelsLike: feels,
          units: 'F',
        };
      });
    }
  };

  // This function is to display the weather report of selected City
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
