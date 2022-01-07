import React, { createContext, PureComponent } from 'react';

export const WeatherContext = createContext();

export const WeatherConsumer = WeatherContext.Consumer;

export class WeatherProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      units: 'C',
      changeUnit: 'celcius',
      defaultCityId: '1277333',
      cities: [],
      filteredCity: [],
      result: [],
      citySearch: false,
    };
  }

  // componentDidMount Lifecycle method to fetch default Bangalore Data
  async componentDidMount() {
    this.defaultCity();
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
  getWeatherResults = async (event) => {
    const currentCity = event.target.value;
    const res = await fetch(
      `https://api.weatherserver.com/weather/cities/${currentCity}`,
    );
    const json = await res.json();
    this.setState({ filteredCity: json });
    this.setState(
      ({ filteredCity }) => {
        const result = filteredCity.results;
        const location = result?.map((item) => item);
        return {
          cities: location,
        };
      },
      () => {
        this.setState({ citySearch: false });
      },
    );
  };

  getWeather = _.debounce(this.getWeatherResults, 500);

  defaultCity = async () => {
    const city = this.state.defaultCityId;
    const { units } = this.state;
    await fetch(
      `https://api.weatherserver.com/weather/current/${city}/${units}`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          result: json,
        });
      });
  };

  // Function to change tempetatures(C to F and F to C)
  changeUnits = (event) => {
    const { value } = event.target;
    this.setState({ changeUnit: value });
    const metrics = value === 'celcius' ? 'C' : 'F';
    this.setState(
      {
        units: metrics,
      },
      this.searchCities,
    );
  };

  // This function is to display the weather report of selected City
  searchCities = (item) => {
    const { units, defaultCityId } = this.state;
    const defaultCityName = item || defaultCityId;
    console.log(item);
    fetch(
      `https://api.weatherserver.com/weather/current/${defaultCityName}/${units}`,
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          result: json,
          citySearch: true,
          defaultCityId: defaultCityName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { children } = this.props;
    const { result, units, cities, changeUnit, filteredCity } = this.state;

    return (
      <WeatherContext.Provider
        value={{
          result,
          cities,
          units,
          getWeatherResults: this.getWeather,
          changeUnits: this.changeUnits,
          currentUnit: changeUnit,
          searchCities: this.searchCities,
          filteredCity,
        }}
      >
        {children}
      </WeatherContext.Provider>
    );
  }
}
