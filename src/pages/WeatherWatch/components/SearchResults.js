import React, { memo } from 'react'
import propTypes from 'prop-types';

const SearchResults = ({ temp, minTemp, maxTemp, pressure, humidity, windSpeed, windDirection, checked }) => {
    console.log('search result render')

    return (
        <div>
            {checked ?
                <div className="mt-2 sm:grid grid-cols-3 sm:space-x-2 w-full text-center">
                    <div className="bg-gradient-to-b from-fuchsia-400 to-orange-500 p-6 rounded-md mb-4 ">
                        <span className="text-white text-md">Current Temperature</span>
                        <h2 className="text-white text-2xl font-semibold">{temp}&deg;C</h2>
                    </div>
                    <div className="bg-gradient-to-b from-fuchsia-400 to-orange-500 p-6 rounded-md mb-4 ">
                        <span className="text-white text-md">Maximum Temperature</span>
                        <h2 className="text-white text-2xl font-semibold">{maxTemp}&deg;C</h2>
                    </div>
                    <div className="bg-gradient-to-b from-fuchsia-400 to-orange-500 p-6 rounded-md mb-4">
                        <span className="text-white text-md">Minimum Temperature</span>
                        <h2 className="text-white text-2xl font-semibold">{minTemp}&deg;C</h2>
                    </div>
                </div>
                :
                <div className="mt-2 sm:grid grid-cols-3 sm:space-x-2 w-full text-center">
                    <div className="bg-gradient-to-b from-fuchsia-400 to-orange-500 p-6 rounded-md mb-4 ">
                        <span className="text-white text-md">Current Temperature</span>
                        <h2 className="text-white text-2xl font-semibold">{temp}&deg;F</h2>
                    </div>
                    <div className="bg-gradient-to-b from-fuchsia-400 to-orange-500 p-6 rounded-md mb-4 ">
                        <span className="text-white text-md">Maximum Temperature</span>
                        <h2 className="text-white text-2xl font-semibold">{maxTemp}&deg;F</h2>
                    </div>
                    <div className="bg-gradient-to-b from-fuchsia-400 to-orange-500 p-6 rounded-md mb-4">
                        <span className="text-white text-md">Minimum Temperature</span>
                        <h2 className="text-white text-2xl font-semibold">{minTemp}&deg;F</h2>
                    </div>
                </div>
            }
            <div className=" sm:grid grid-cols-2 sm:space-x-2 w-full text-center">
                <div className="bg-gradient-to-tr from-fuchsia-900 to-pink-400 p-6 rounded-md mb-4">
                    <span className="text-white text-md">Wind Speed</span>
                    <h2 className="text-white text-2xl font-semibold">{windSpeed} m/s</h2>
                </div>
                <div className="bg-gradient-to-tr from-fuchsia-900 to-pink-400 p-6 rounded-md mb-4">
                    <span className="text-white text-md">Wind Direction</span>
                    <h2 className="text-white text-2xl font-semibold">{windDirection} degrees</h2>
                </div>

            </div>

            <div className=" sm:grid grid-cols-2 sm:space-x-2 w-full text-center">
                <div className="bg-gradient-to-r from-sky-400 to-blue-700 p-6 rounded-md mb-4 ">
                    <span className="text-white text-md">Pressure</span>
                    <h2 className="text-white text-2xl font-semibold">{pressure} hPa</h2>
                </div>
                <div className="bg-gradient-to-r from-sky-400 to-blue-700 p-6 rounded-md mb-4 ">
                    <span className="text-white text-md">Humidity</span>
                    <h2 className="text-white text-2xl font-semibold">{humidity}%</h2>
                </div>

            </div>
        </div>
    )
}

export default memo(SearchResults);

SearchResults.propTypes = {
    temp: propTypes.number.isRequired,
    minTemp: propTypes.number.isRequired,
    maxTemp: propTypes.number.isRequired,
    pressure: propTypes.number.isRequired,
    humidity: propTypes.number.isRequired,
    windSpeed: propTypes.number.isRequired,
    windDirection: propTypes.number.isRequired,
    checked: propTypes.bool.isRequired,
}
