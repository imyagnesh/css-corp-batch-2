import React, {memo} from 'react';
import PropTypes from 'prop-types';

const WeatherReport = (props) => {
  const { main, name, weather, wind, cod, message } = props.data || {};
  const { temperatureUnits, city } = props;
  const unit = temperatureUnits === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>;
  return (
    <>
    {main && (
      <div className='w-full bg-white rounded-sm p-3 mt-3'>
        <div className="city-details flex py-3">
          <div className='inline-flex flex-col flex-1'>
            <div className='text-3xl font-bold'>{name}</div>
            <div className='uppercase text-xs font-bold text-gray-500 mt-3'>
              {weather[0].description} | Feels like {main.feels_like.toFixed()}{unit}
            </div>
          </div>
          <div className='inline-flex flex-col bg-orange-300 rounded-full items-center self-start'>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} width="64" height="64" />
          </div>
        </div>
        <div className="city-weather-details mt-5">
          <div className='city-weather-details__current-temperature'>
            <div className='city-weather-details__label'>Current Temperature</div>
            <div className='city-weather-details__values'>{main.temp.toFixed()}{unit}</div>
          </div>
          <div className='city-weather-details__maximum-temperature'>
            <div className='city-weather-details__label'>Maximum Temperature</div>
            <div className='city-weather-details__values'>{main.temp_max.toFixed()}{unit}</div>
          </div>
          <div className='city-weather-details__minimum-temperature'>
            <div className='city-weather-details__label'>Minimum Temperature</div>
            <div className='city-weather-details__values'>{main.temp_min.toFixed()}{unit}</div>
          </div>
          <div className='city-weather-details__wind-speed'>
            <div className='city-weather-details__label'>Wind Speed</div>
            <div className='city-weather-details__values'>{wind.speed.toFixed(1)} meter/sec</div>
          </div>
          <div className='city-weather-details__wind-direction'>
            <div className='city-weather-details__label'>Wind direction</div>
            <div className='city-weather-details__values'>{wind.deg} degrees</div>
          </div>
          <div className='city-weather-details__pressure'>
            <div className='city-weather-details__label'>Pressure</div>
            <div className='city-weather-details__values'>{main.pressure} hPa</div>
          </div>
          <div className='city-weather-details__humidity'>
            <div className='city-weather-details__label'>Humidity</div>
            <div className='city-weather-details__values'>{main.humidity} %</div>
          </div>
        </div>
      </div>
    )}
    {cod === '404' && (
      <div className='city-weather-details__not-found p-3 mt-3'>
        <div className='text-3xl font-bold'>{city}</div>
        {message}
      </div>
    )}
    </>
  )
}

WeatherReport.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.objectOf(PropTypes.number),
    weather: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      id: PropTypes.number,
      main: PropTypes.string
    })),
    wind: PropTypes.objectOf(PropTypes.number),
    name: PropTypes.string,
    message: PropTypes.string,
    cod: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  }).isRequired,
  temperatureUnits: PropTypes.oneOf(['metric', 'imperial']).isRequired,
  city: PropTypes.string.isRequired
}

WeatherReport.displayName = 'WeatherReport';

export default memo(WeatherReport);
