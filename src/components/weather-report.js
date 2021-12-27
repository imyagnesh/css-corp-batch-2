import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReport = ({ city, currentUnit }) => {
  const { location, icon, conditions, feels_like, temp, temp_max, temp_min, wind_speed, wind_direction, pressure, humidity } = city;
  const unit = currentUnit === 'C' ? <span>&#8451;</span> : <span>&#8457;</span>;

  return (
    <div>
      <h3 className="mb-1 text-3xl font-semibold capitalize">{location}</h3>
      <span className="absolute -top-3 -right-3 rounded-full">
        <img className="w-[128px]" src={icon} />
      </span>
      <div className="text-xs text-slate-500 font-semibold">
        {conditions} | Feels Like {feels_like}&#8451;
      </div>

      <div className="mt-12">
        <div className="flex justify-around">
          <div className="flex-1 p-2 rounded-md text-center bg-gradient-to-b from-fuchsia-600 to-orange-500 text-white">
            <div className="text-xs tracking-wider">Current temperature</div>
            <div className="text-xl">{temp}{unit}</div>
          </div>
          <div className="flex-1 p-2 rounded-md ml-1 text-center bg-gradient-to-b from-fuchsia-600 to-orange-500 text-white">
            <div className="text-xs tracking-wider">Maximum temperature</div>
            <div className="text-xl">{temp_max}{unit}</div>
          </div>
          <div className="flex-1 p-2 rounded-md ml-1 text-center bg-gradient-to-b from-fuchsia-600 to-orange-500 text-white">
            <div className="text-xs tracking-wider">Minimum temperature</div>
            <div className="text-xl">{temp_min}{unit}</div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-around">
          <div className="flex-1 p-2 rounded-md text-center bg-gradient-to-r from-fuchsia-800 to-pink-500 text-white">
            <div className="mb-3 text-xs tracking-wider">Wind Speed</div>
            <div className="text-xl lowercase">{wind_speed} meter/sec</div>
          </div>
          <div className="flex-1 p-2 ml-1 rounded-md text-center bg-gradient-to-r from-fuchsia-800 to-pink-500 text-white">
            <div className="mb-3 text-xs tracking-wider">Wind Direction</div>
            <div className="text-xl lowercase">{wind_direction} degrees</div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-around">
          <div className="flex-1 p-2 rounded-md text-center bg-gradient-to-r from-cyan-500 to-indigo-600 text-white">
            <div className="mb-3 text-xs tracking-wider">Pressure</div>
            <div className="text-xl lowercase">{pressure} meter/sec</div>
          </div>
          <div className="flex-1 p-2 ml-1 rounded-md text-center bg-gradient-to-r from-cyan-500 to-indigo-600 text-white">
            <div className="mb-3 text-xs tracking-wider">Humidity</div>
            <div className="text-xl lowercase">{humidity} %</div>
          </div>
        </div>
      </div>
    </div>
  )
}

WeatherReport.propType = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    feels_like: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    wind_direction: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    conditions: PropTypes.number.isRequired,
  })
}


export default memo(WeatherReport);