import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReport = ((props) => {
  const { weatherReport, unit } = props;
  const { location, conditions, feels_like, icon, temp, temp_min, temp_max, wind_speed, wind_direction, pressure, humidity } = weatherReport;

  return (
    <div className="weather-report">
      <div className='big'>{location}</div>
      <div className='conditions'>{conditions} |FEELS LIKE {feels_like}&deg; {unit}</div>
      <img src={icon} alt='wether icon' />
      <div className='temperature'>
        <div><p className='label'>current temperature</p>{temp}&deg; {unit}</div>
        <div><p className='label'>min temperature</p>{temp_min}&deg; {unit}</div>
        <div><p className='label'>max temperature</p>{temp_max}&deg; {unit}</div>
      </div>
      <div className='wind'>
        <div><p className='label'>wind speed</p>{wind_speed} meter/sec</div>
        <div><p className='label'>wind direction</p>{wind_direction} degrees</div>
      </div>
      <div className='pressure'>
        <div><p className='label'>pressure</p>{pressure} meter/sec</div>
        <div><p className='label'>humidity</p>{humidity}%</div>
      </div>
    </div>
  );
});

WeatherReport.propTypes = {
  weatherReport: PropTypes.shape({
    location: PropTypes.string,
    conditions: PropTypes.string,
    icon: PropTypes.string,
    feels_like: PropTypes.number,
    temp: PropTypes.number,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
  }),
  unit: PropTypes.string.isRequired,
};

export default memo(WeatherReport);
