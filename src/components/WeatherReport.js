import React, { memo } from 'react';


const WeatherReport = (props) => {
    return (
        <div className="weather-report">
            <h2 className="big">{props.city.location}</h2>
            <p className="conditions">{props.city.conditions} <span className="uppercase">| feels like </span>{props.city.feels_like}&deg;{props.units}</p>
            {props.city.icon && <img src={props.city.icon} alt="icon" />}
            <div className="temperature">
                <div>
                    <h2>Current Temperature</h2>
                    <p>{props.city.temp}&deg;{props.units}</p>
                </div>
                <div>
                    <h2>Max Temperature</h2>
                    <p>{props.city.temp_max}&deg;{props.units}</p>
                </div>
                <div>
                    <h2>Min Temperature</h2>
                    <p>{props.city.temp_min}&deg;{props.units}</p>
                </div>
            </div>
            <div className="wind">
                <div>
                    <h2>Wind Speed</h2>
                    <p>{props.city.wind_speed} meter/sec</p>
                </div>
                <div>
                    <h2>Wind Direction</h2>
                    <p>{props.city.wind_direction} degrees</p>
                </div>
            </div>
            <div className="pressure">
                <div>
                    <h2>Pressure</h2>
                    <p>{props.city.pressure} hPa</p>
                </div>
                <div>
                    <h2>Humidity</h2>
                    <p>{props.city.humidity} %</p>
                </div>
            </div>
        </div>
    );
};

export default memo(WeatherReport);