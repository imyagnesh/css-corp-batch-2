import React, { createContext, PureComponent } from 'react';

export const WeatherContext = createContext();

export const WeatherConsumer = WeatherContext.Consumer;

export class WeatherProvider extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    weatherData: {},
    city: 'Bengaluru',
    units: 'C',
    rerender: 0
  };


  setContextState = ({ weatherData, city, units, rerender, unitsChanged }) => {
    this.setState({
      city,
      units,
      weatherData,
      rerender,
      unitsChanged,
    });
  };


  getContextState = () => this.state;

  async componentDidMount() {
    console.log('weatherContext render');
    this.loadWeather();
  }
  async componentDidUpdate() {
    console.log('weatherContext updated');
    if (this.state['rerender'] && this.state.rerender === 1) {
      console.log('rerendering.....');
      this.loadWeather();
      document.getElementById('citysearch').style.display = "none";
    }
  }

  loadWeather = async () => {
    try {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=1f03305478394edd87e150846212712&q=${this.state.city}&days=1&aqi=no&alerts=no`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      console.log(json);
      this.setState({
        weatherData: json,
        units: this.state.units || 'C',
        rerender: 0
      });
    } catch (error) {
      this.setState({
        error: error
      })
    }
  };
  componentDidCatch(error, info) {

  }

  render() {
    const { children } = this.props;
    const { weatherData, city, units, rerender, error } = this.state;

    return (
      <WeatherContext.Provider
        value={{
          weatherData,
          units,
          city,
          setContextState: this.setContextState,
          loadWeather: this.loadWeather,
          getContextState: this.getContextState,
          rerender,
          error
        }}
      >
        {children}
      </WeatherContext.Provider>
    );
  }
}
