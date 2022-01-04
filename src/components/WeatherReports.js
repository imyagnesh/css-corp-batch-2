import React, { memo } from 'react';

const WeatherReports = ({
  city,
  description,
  units,
  currentTemp,
  windSpeed,
  maxTemp,
  minTemp,
  windDct,
  pressure,
  humidity,
  feelsLike,
}) => (
  <div className="mt-2 mx-2 bg-white rounded">
    <div className="grid grid-cols-3 mx-2">
      <div className="my-3 p-2 col-span-2">
        <h3 className="text-2xl font-bold tracking-wide">{city}</h3>
        <div className="uppercase text-slate-500 font-bold text-xs">
          {description} <span>| feels like</span> {feelsLike}
          &deg;
          {units}
        </div>
      </div>
    </div>
    <div className="flex mx-2">
      <div className="temperature-section">
        <div className="text-field">current temperature</div>
        <span className="text-white">
          {currentTemp}
          &deg;
          {units}
        </span>
      </div>
      <div className="temperature-section">
        <div className="text-field">Maximum temperature</div>
        <span className="text-white">
          {maxTemp}
          &deg;
          {units}
        </span>
      </div>
      <div className="temperature-section">
        <div className="text-field">minimum temperature</div>
        <span className="text-white">
          {minTemp}
          &deg;
          {units}
        </span>
      </div>
    </div>
    <div className="flex pt-5 mx-2">
      <div className="wind-section">
        <div className="text-field">wind speed</div>
        <span className="text-white">{windSpeed} meter/sec</span>
      </div>
      <div className="wind-section">
        <div className="text-field">wind direction</div>
        <span className="text-white">{windDct} degrees</span>
      </div>
    </div>
    <div className="flex pt-5 pb-5 mx-2">
      <div className="air-section">
        <div className="pressure">pressure</div>
        <span className="text-white">{pressure} hPa</span>
      </div>
      <div className="air-section">
        <div className="pressure">humidity</div>
        <span className="text-white">{humidity} %</span>
      </div>
    </div>
  </div>
);

export default memo(WeatherReports);
