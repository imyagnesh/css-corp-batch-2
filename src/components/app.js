import React, { createRef, PureComponent } from "react";
import ReactDOM from "react-dom";
import debounce from "lodash.debounce";
import Input from "./input";
import SearchResults from "./searchResults";
import SetUnit from "./setUnits";
import WeatherReport from "./weatherReport";
import weatherServer from "../server";
import '../index.css'

weatherServer()
class App extends PureComponent {
  state = { currentCity: {}, cities: [], currentUnit: 'C', currentCityId: null };
  inputText = createRef();

  getWeather = async (cityId) => {
    const { currentUnit } = this.state;
    const response = await fetch(`https://api.weatherserver.com/weather/current/${cityId}/${currentUnit}`)
    const json = await response.json()
    this.setState({ currentCity: json, currentCityId: cityId, cities: [] }, () => { this.inputText.current.value = '' })
  }

  searchLocations = async (key) => {
    const response = await fetch(`https://api.weatherserver.com/weather/cities/${key}`)
    const json = await response.json()
    this.setState({ cities: json.results })
  }

  getValueFromTextBox = debounce((keyword) => {
    this.searchLocations(keyword)
  }, 500)

  setUnit = (unit) => {
    this.setState({ currentUnit: unit }, () => {
      this.getWeather(this.state.currentCityId)
    });
  }

  componentDidMount() {
    this.getWeather(1277333)
  }

  render() {
    const { currentCity, cities, currentUnit } = this.state;
    return <div className="weather-app">
      <h1>Weather App</h1>
      <Input search={this.getValueFromTextBox} ref={this.inputText} />
      <SetUnit setUnit={this.setUnit} />
      {cities.length > 0 && <SearchResults setCity={this.getWeather} cities={cities} />}
      <WeatherReport city={currentCity} unit={currentUnit} />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))