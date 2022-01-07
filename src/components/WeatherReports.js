import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReports = ({ result, units }) => (
  <div className="mt-2 mx-2 bg-white rounded">
    <div className="grid grid-cols-3 mx-2">
      <div className="my-3 p-2 col-span-2">
        <h3 className="text-2xl font-bold tracking-wide">{result.location}</h3>
        <div className="uppercase text-slate-500 font-bold text-xs">
          {result.conditions} <span>| feels like</span> {result.feels_like}
          &deg;
          {units}
        </div>
      </div>
      <div className="inline-grid grid-col rounded-full w-16 bg-orange-200 justify-self-end mt-4 mb-7 mr-2">
        <img src={result.icon} width="64" height="64" />
      </div>
    </div>
    <div className="flex mx-2">
      <div className="temperature-section">
        <div className="text-field">current temperature</div>
        <span className="text-white">
          {result.temp}
          &deg;
          {units}
        </span>
      </div>
      <div className="temperature-section">
        <div className="text-field">Maximum temperature</div>
        <span className="text-white">
          {result.temp_max}
          &deg;
          {units}
        </span>
      </div>
      <div className="temperature-section">
        <div className="text-field">minimum temperature</div>
        <span className="text-white">
          {result.temp_min}
          &deg;
          {units}
        </span>
      </div>
    </div>
    <div className="flex pt-5 mx-2">
      <div className="wind-section">
        <div className="text-field">wind speed</div>
        <span className="text-white">{result.wind_speed} meter/sec</span>
      </div>
      <div className="wind-section">
        <div className="text-field">wind direction</div>
        <span className="text-white">{result.wind_direction} degrees</span>
      </div>
    </div>
    <div className="flex pt-5 pb-5 mx-2">
      <div className="air-section">
        <div className="pressure">pressure</div>
        <span className="text-white">{result.pressure} hPa</span>
      </div>
      <div className="air-section">
        <div className="pressure">humidity</div>
        <span className="text-white">{result.humidity} %</span>
      </div>
    </div>
  </div>
);

WeatherReports.propTypes = {
  result: PropTypes.shape({
    location: PropTypes.string,
    conditions: PropTypes.string,
    feels_like: PropTypes.number,
    temp: PropTypes.number,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
  }).isRequired,
  units: PropTypes.string.isRequired,
};
export default memo(WeatherReports);
