import React, { memo, useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';

const WeatherInfo = () => {
  const {
    data: { selectedCity, loading, error },
  } = useContext(WeatherContext);
  const {
    location,
    conditions,
    icon,
    temp,
    temp_max,
    temp_min,
    wind_direction,
    wind_speed,
    pressure,
    humidity,
  } = selectedCity || {};
  if (error) {
    return <div className="error-panel" />;
  }
  if (loading) {
    return <div className="is-loading" />;
  }
  return (
    <div className="weather-report">
      <h2 className="big">{location}</h2>
      <p className="conditions">{conditions}</p>
      {icon && <img src={icon} alt="icon" />}
      <div className="temperature">
        <div>
          <h2>Current Temperature</h2>
          <p>{temp}</p>
        </div>
        <div>
          <h2>Max Temperature</h2>
          <p>{temp_max}</p>
        </div>
        <div>
          <h2>Min Temperature</h2>
          <p>{temp_min}</p>
        </div>
      </div>
      <div className="wind">
        <div>
          <h2>Wind Speed</h2>
          <p>{wind_speed}</p>
        </div>
        <div>
          <h2>Wind Direction</h2>
          <p>{wind_direction}</p>
        </div>
      </div>
      <div className="pressure">
        <div>
          <h2>Pressure</h2>
          <p>{pressure}</p>
        </div>
        <div>
          <h2>Humidity</h2>
          <p>{humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(WeatherInfo);
