import React from 'react'

const WeatherReport = ({ currentCity, currentUnit }) => {
    const {
        location,
        temp,
        temp_min,
        temp_max,
        feels_like,
        conditions,
        humidity,
        icon,
        pressure,
        wind_speed,
        wind_direction
    } = currentCity;

    const currUnit = currentUnit === "C" ? `°${currentUnit}` : currentUnit
    return (
        <div className="weather-report">
            <h1 className="big">{location}</h1>
            <p>{conditions} | Feels like {feels_like} {currUnit}</p>
            <img src={icon} />
            <div className="temperature">
                <div>
                    <p>Current Temperature</p>
                    <h2>{temp} {currUnit}</h2>
                </div>
                <div>
                    <p>Maximum Temperature</p>
                    <h2>{temp_min} {currUnit}</h2>
                </div>
                <div>
                    <p>Minimum Temperature</p>
                    <h2>{temp_max} {currUnit}</h2>
                </div>
            </div>
            <div className="wind">
                <div>
                    <p>Wind Speed</p>
                    <h2>{wind_speed} meter/sec</h2>
                </div>
                <div>
                    <p>Wind Direction</p>
                    <h2>{wind_direction} %</h2>
                </div>
            </div>
            <div className="pressure">
                <div>
                    <p>Pressure</p>
                    <h2>{pressure} hPa</h2>
                </div>
                <div>
                    <p>Humidity</p>
                    <h2>{humidity} %</h2>
                </div>
            </div>

        </div>
    )
}


export default WeatherReport;