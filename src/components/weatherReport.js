import React from 'react'

const WeatherReport = ({ currentCity, currentUnit }) => {
    const {
        location,
        conditions,
        feels_like,
        icon,
        temp,
        temp_min,
        temp_max,
        wind_speed,
        wind_direction,
        humidity,
        pressure
    } = currentCity;

    return (
        <div className="weather-report">
            <h1 className="big">{location}</h1>
            <p>{conditions} | {feels_like}</p>
            <img src={icon} />
            <div className="temperature">
                <div>
                    <p>Current Temperature</p>
                    <h2>{temp} {currentUnit}</h2>
                </div>
                <div>
                    <p>Maximum Temperature</p>
                    <h2>{temp_min} {currentUnit}</h2>
                </div>
                <div>
                    <p>Minimum Temperature</p>
                    <h2>{temp_max} {currentUnit}</h2>
                </div>
            </div>
            <div className="wind">
                <div>
                    <p>Wind Speed</p>
                    <h2>{wind_speed} m/s</h2>
                </div>
                <div>
                    <p>Wind Direction</p>
                    <h2>{wind_direction}</h2>
                </div>
            </div>
            <div className="pressure">
                <div>
                    <p>Pressure</p>
                    <h2>{pressure}</h2>
                </div>
                <div>
                    <p>Humidity</p>
                    <h2>{humidity}</h2>
                </div>
            </div>

        </div>
    )
}


export default WeatherReport;