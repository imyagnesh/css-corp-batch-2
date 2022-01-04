import React, { PureComponent, createRef, lazy, Suspense } from 'react';
import { stockData } from "./city";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const WeatherUnits = lazy(() => import('./weatherUnit'));
//const WeatherReport = lazy(() => import('./weatherReport'));

export default class Weather extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            weatherList: [],
            selectedCity: 'Chennai',
        };

        this.inputText = createRef();
    }


    inputRef = createRef();

    async componentDidMount() {
        this.loadWeather();
    }

    handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
    }

    handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
    }

    handleOnSelect = (item) => {
        // the item selected
        this.setState({ selectedCity: item.name })
        console.log(item.name)
    }

    handleOnFocus = () => {
        // console.log('Focused')
    }


    formatResult = (item) => {
        return item
        // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
    }
    checkWeather = (event) => {
        event.preventDefault();
        const cityVal = this.state.selectedCity;
        const city = cityVal.charAt(0).toUpperCase() + cityVal.slice(1);
        this.setState({
            selectedCity: city,
        },
            () => {
                // this.inputRef.current.value = '';
                this.loadWeather();
            },
        );

    };

    loadWeather = async () => {
        try {
            let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.selectedCity + '&units=imperial&appid=333458e05b25c5e69a7c22d64b7bc47f';
            const res = await fetch(url);
            const json = await res.json();
            this.setState({
                weatherList: json
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { weatherList, selectedCity } = this.state;
        return (
            <div className="weather-group">
                <h1 className="weather-title">Weather Watch</h1>
                <div className="location-search-form">
                    <form className="location-search" onSubmit={this.checkWeather}>
                        <div className="location-input">
                            <h3 className="uppercase font-medium">Location</h3>
                            <ReactSearchAutocomplete className="input"
                                items={stockData}
                                onSearch={this.handleOnSearch}
                                onHover={this.handleOnHover}
                                onSelect={this.handleOnSelect}
                                onFocus={this.handleOnFocus}
                                autoFocus
                                formatResult={this.formatResult}
                            />
                        </div>

                        <div className="location-btn">
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <WeatherUnits />
                            </Suspense>
                        </div>
                    </form>
                </div>

                {[].concat(this.state.weatherList).map(weather => {
                    return (
                        <div key={weather.id}>
                            <div className="location-details">
                                <div className="location-cloud">
                                    <h2>{weather.name}</h2>
                                    <p>{weather.weather[0].description}</p>
                                </div>
                            </div>
                            <div className="location-temp">
                                <p>
                                    Current Temperature
                                    <br />
                                    {weather.main.temp}
                                </p>
                                <p>
                                    Minimum Temperature
                                    <br />
                                    {weather.main.temp_min}
                                </p>
                                <p>
                                    Maximum Temperature
                                    <br />
                                    {weather.main.temp_max}
                                </p>
                            </div>
                            <div className="location-wind">
                                <p>
                                    Wind Speed
                                    <br />
                                    {weather.wind.speed}
                                </p>
                                <p>
                                    Wind Direction
                                    <br />
                                    {weather.wind.deg}
                                </p>
                            </div>
                            <div className="location-pres">
                                <p>
                                    Pressure
                                    <br />
                                    {weather.main.pressure}
                                </p>
                                <p>
                                    Humidity
                                    <br />
                                    {weather.main.humidity}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}