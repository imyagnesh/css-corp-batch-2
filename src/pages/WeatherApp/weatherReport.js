import React from 'react';
import propTypes from 'prop-types';

const WeatherReport = (props) => {
  const {conditions, feels_like, humidity, icon, location, pressure, temp, temp_max, temp_min, wind_direction, wind_speed} = props.weatherDetails;
  return(
    <>
      {location && (
        <div className='weather-app-results'>
          <div className='weather-city-results'>
            <div className='weather-city-results--container'>
              <h2 className='weather-city-results--title'>{location}</h2>
              <img className='weather-city-results--img' src={icon} alt="" />
              <p className='weather-city-results--details'>{conditions} | Feels like {temp} <sup>0</sup>{props.temperature}</p>
            </div>
            <div className='weather-city-results--additional'>
              <div className='weather-city-results--temperature'>
                <div className='mx-0'><span className='text-xs'>Current Temperature </span><span className='block capitalize'>{temp}<sup>0</sup>{props.temperature}</span></div>
                  <div><span className='text-xs'>Maximum Temperature </span><span className='block capitalize'>{temp_max}<sup>0</sup>{props.temperature}</span></div>
                  <div><span className='text-xs'>Minimum Temperature </span><span className='block capitalize'>{temp_min}<sup>0</sup>{props.temperature}</span></div>
                </div>
                <div className='weather-city-results--wind'>
                  <div><span className='text-xs'>Wind Speed </span><span className='block capitalize'>{wind_speed} meter/sec</span></div>
                  <div><span className='text-xs'>Wind Direction </span><span className='block capitalize'>{wind_direction} degrees</span></div>
                </div>
                <div className='weather-city-results--humidity'>
                  <div><span className='text-xs'>Pressure </span><span className='block lowercase'>{pressure} hpa</span></div>
                  <div><span className='text-xs'>Humidity </span><span className='block'>{humidity} %</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}

WeatherReport.propTypes = {
   weatherDetails: propTypes.shape({
    conditions: propTypes.string,
    feels_like: propTypes.number,
    humidity: propTypes.number,
    icon: propTypes.string,
    location: propTypes.string,
    pressure: propTypes.number,
    temp: propTypes.number,
    temp_max: propTypes.number,
    temp_min: propTypes.number,
    wind_direction: propTypes.number,
    wind_speed: propTypes.number,

   }),
   temperature: propTypes.string.isRequired
}


export default WeatherReport;