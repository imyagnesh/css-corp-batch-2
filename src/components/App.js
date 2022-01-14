import React, { Component, createRef } from 'react'
import _ from 'lodash';
import Input from './Input';
import SetUnits from './SetUnits';
import SearchResults from './SearchResults';
import WeatherReport from './WeatherReport';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            units: 'C',
            defaultLocation: '1277333',
            city: [],
            cities: [],
            changeMetrics: 'celcius',
            isDone: false,
        }
    }

    inputRef = createRef();

    async componentDidMount() {
        const { defaultLocation, units } = this.state;
        const url = await fetch(`https://api.weatherserver.com/weather/current/${defaultLocation}/${units}`);
        const json = await url.json();
        console.log(json);
        if (json) {
            this.setState({
                city: json,
            });
        }
    }

    async componentDidUpdate(previousState) {
        const { isDone } = this.state;
        if (document.getElementById('cityButton') !== null) {
            if (previousState.isDone !== isDone) {
                document.getElementById('cityButton').style.display = 'block';
            }
            if (isDone === true) {
                document.getElementById('cityButton').style.display = 'none';
            }
        }
    }

    getCityInfo = async (event) => {
        console.log(event.target);
        const res = await fetch(
            `https://api.weatherserver.com/weather/cities/${event.target.value}`,
        );
        const json = await res.json();
        console.log(json);
        this.setState({
            cities: json.results,
        }, () => {
            this.setState({ isDone: false });
        })
    }

    getWeather = _.debounce(this.getCityInfo, 500);

    setUnits = (event) => {
        const value = (event.target.value === 'celcius') ? 'C' : 'F';
        this.setState({
            units: value,
            changeMetrics: event.target.value,

        }, this.searchLocations);
    }

    searchLocations = (item) => {
        const { units, defaultLocation } = this.state;
        const defaultCity = item || defaultLocation;
        console.log(defaultCity);
        fetch(
            `https://api.weatherserver.com/weather/current/${defaultCity}/${units}`,
        )
            .then((response) => response.json())
            .then((json) => {
                console.log('data:', json);
                this.setState({
                    city: json,
                    defaultLocation: defaultCity,
                    isDone: true,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const { city, units, changeMetrics, cities } = this.state;
        return (
            <div className="weather-app">
                <h1>Weather App</h1>
                <div>
                    <Input
                        id="txtLocation"
                        getCityInfo={this.getCityInfo}
                        ref={this.inputRef}
                    />
                    <SetUnits units={units} setUnits={this.setUnits} changeMetrics={changeMetrics} />
                    <SearchResults searchLocations={this.searchLocations} cities={cities} />
                    <WeatherReport city={city} units={units} />
                </div>
            </div>
        );
    }
}

export default App
