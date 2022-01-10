import React, { createRef, PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Input from './input'
import SetUnits from './setUnits'
import SearchResults from './searchResults'
import WeatherReport from './weatherReport'
import weatherServer from '../server/index'
import { debounce } from 'lodash'


import '../index.css'
weatherServer();

export default class App extends PureComponent {

    state = {
        currentCity: null,
        cities: [],
        currentUnit: "C",
        currentCityId: null,
        invalidCity: null,
    }

    searchText = createRef();

    componentDidMount() {
        this.getWeather('1277333');
    }

    getWeather = async (cityId) => {
        try {
            const { currentUnit } = this.state;
            const res = await fetch(`https://api.weatherserver.com/weather/current/${cityId}/${currentUnit}`);
            const data = await res.json();
            this.setState({
                currentCity: data,
                cities: [],
                currentCityId: cityId,
            }, () => { this.searchText.current.value = '' });

        } catch (e) {

        }
    }

    searchLocations = async (searchText) => {
        try {
            const res = await fetch(`https://api.weatherserver.com/weather/cities/${searchText}`);
            const data = await res.json();
            this.setState({
                cities: data.results,
                invalidCity: data.results.length ? null : searchText,
            });
        } catch (e) {

        }
    }

    getSearchText = debounce(() => {
        this.searchLocations(this.searchText.current.value);
    }, 500);

    changeUnits = (unit) => {

        this.setState({
            currentUnit: unit,
        }, () => this.getWeather(this.state.currentCityId));
    }

    render() {
        const { currentCity, cities, currentUnit, invalidCity } = this.state;
        return (
            <div className="weather-app">
                <h1 >Weather Watch</h1>
                <Input ref={this.searchText} getSearchText={this.getSearchText} />
                <SetUnits changeUnits={this.changeUnits} />
                {(cities?.length || invalidCity) && <SearchResults cities={cities} getWeather={this.getWeather} invalidCity={invalidCity} />}
                {currentCity !== null && <WeatherReport currentCity={currentCity} currentUnit={currentUnit} />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
