import React, { Component } from 'react';

export class WeatherApp extends Component {
    render() {
        return (
            <div className="flex justify-center">
                <div className="weather-app bg-[#FAFAFA] h-screen border-4 p-4 w-3/6">
                    <div className="weather-title mb-2">
                        <h1 className="border-b-2 border-rose-500">WeatherWatch</h1>
                    </div>
                    <div className="weather-input-parent flex mb-1">
                        <div className="weather-input grow bg-[#ffffff] p-2 pt-4 pb-4 mr-1 rounded-lg">
                            <input type="text" value="" placeholder="location" className="focus:shadow-outline outline-none" />
                        </div>
                        <div className="weather-units flex-none p-2 bg-[#ffffff] pt-4 pb-4 rounded-lg">
                            <input type="number" value="" placeholder="units" className="focus:shadow-outline outline-none" />
                        </div>
                    </div>
                    <div className="weather-city-dropdown relative">
                        <div className="absolute dropdown-result bg-[#FFFFFF] flex w-full h-20 p-2">
                            <ul className="flex items-center justify-center space-x-6 px-4">
                                <li className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full"><a>chennai</a></li>
                                <li className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full"><a>chicago</a></li>
                                <li className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full"><a>chetpet</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="weather-city-display flex">
                        <div className="city-name flex flex-col">
                            <p>Bangalore</p>
                            <p>
                                Scattered Clouds &nbsp;
                                <span>|</span>
                                &nbsp; 30 C
                            </p>
                        </div>
                        <div className="cloud-image">
                            <img src="../../images/cloud-icon.svg" width='100' height='80' alt="svg-cloud" />
                        </div>
                    </div>
                    <div className="weather-details">
                        <div className="weather-temperature flex justify-between">
                            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
                                <p>Current Temperature</p>
                                <p>29 C</p>
                            </div>
                            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
                                <p>Maximum Temperature</p>
                                <p>29 C</p>
                            </div>
                            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
                                <p>Minimum Temperature</p>
                                <p>29 C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherApp;
