import React, { Component, createRef, Suspense } from 'react';
//import cn from 'classnames';
import _ from 'lodash';
import './weatherwatch.css';
import WeatherReport from './weatherReport';

export default class Weatherwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherDetails: null,
            weatherList: [],
            weatherCityList: [],
        };
        this.inputText = createRef();
    }

    async componentDidMount() {
        this.loadWeather();
    }

    loadWeather = async () => {
        try {
            const res = await fetch('http://localhost:3000/weatherreport?city=Bangalore');
            const json = await res.json();
            this.setState(
                ({ weatherDetails, weatherList }) => {
                    const weatherData = json[0];
                    weatherList.city = weatherData?.city;
                    weatherList.image = weatherData?.image;
                    weatherList.wind_speed = weatherData?.wind_speed;
                    weatherList.wind_dir = weatherData?.wind_dir;
                    weatherList.pressure = weatherData?.pressure;
                    weatherList.humidity = weatherData?.humidity;

                    weatherData?.celsius.map(function (current, index) {
                        weatherList.curr_temp = current.curr_temp;
                        weatherList.max_temp = current.max_temp;
                        weatherList.min_temp = current.min_temp;
                    });

                    return {
                        weatherDetails: weatherList
                    }
                },
                () => {
                    this.inputText.current.value = '';
                },
            );
        } catch (error) {
            console.error(error);
        }
    };

    loadWeatherCity = _.debounce((e) => {
        e.preventDefault();
        const WeatherCity = this.inputText.current.value;
        this.setDisplayedCity(WeatherCity);
    }, 500);


    setDisplayedCity = async (value) => {
        try {
            const res = await fetch('http://localhost:3000/weatherreport/?city_like=' + value);
            const json = await res.json();
            this.setState(
                ({ weatherCityList }) => {
                    if (value != '') {
                        weatherCityList = json.map(function (current, index) {
                            return <div className="city_search">{current.city}</div>;
                        });
                    } else {
                        weatherCityList = <div></div>;
                    }

                    return {
                        weatherCityList
                    }
                });

        } catch (error) {
            console.error(error);
        }
    };

    checkWheather = async (event) => {
        try {
            event.preventDefault();
            const WeatherCity = this.inputText.current.value;
            const weatherTemp = event.target.value;
            const res = await fetch(`http://localhost:3000/weatherreport/?city=${WeatherCity}`);
            const json = await res.json();
            console.log(json);
            this.setState(
                ({ weatherList, weatherDetails, weatherCityList }) => {
                    if (json.length > 0) {
                        const weatherData = json[0];
                        weatherList.city = weatherData?.city;
                        weatherList.image = weatherData?.image;
                        weatherList.wind_speed = weatherData?.wind_speed;
                        weatherList.wind_dir = weatherData?.wind_dir;
                        weatherList.pressure = weatherData?.pressure;
                        weatherList.humidity = weatherData?.humidity;
                        weatherData[weatherTemp]?.map(function (current, index) {
                            weatherList.curr_temp = current.curr_temp;
                            weatherList.max_temp = current.max_temp;
                            weatherList.min_temp = current.min_temp;
                        });                       
                    }
                    weatherCityList =<div></div>;

                    return {
                        weatherDetails: weatherList,
                        weatherCityList
                    }
                },
                () => {
                    //this.inputText.current.value = '';
                },
            );
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        console.log('render');
        const { weatherList, weatherDetails, weatherCityList } = this.state;
        return (
            <div className="w-full max-w-xl weather_container">
                <div className="flex text-left watch_text divide-pick-500">Weather Watch</div>
                <hr className="border-2 border-solid border-red-600" />
                <form className="flex" onSubmit={this.checkWheather}>
                    <div className="weather_city bg-[#FFF] px-2">
                        <div className="watch_text text-sm ">LOCATION</div>
                        <input type="text" onChange={this.loadWeatherCity} ref={this.inputText} className="input shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={this.inputText} />
                    </div>
                    <div className="bg-[#FFF] px-2 ml-1">
                        <div className="watch_text text-sm weather_unit">UNITS</div>
                        <select className="font-bold  shadow  border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={this.checkWheather}>
                            <option value="celsius">Celsius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                        </select>
                    </div>
                </form >
                <div className="flex">{weatherCityList}</div>
                <WeatherReport weatherList={weatherList} weatherDetails={weatherDetails} weatherCityList={weatherCityList}   />
            </div>
        );
    }
}



