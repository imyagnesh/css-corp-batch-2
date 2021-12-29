import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherReport = ({ city, currentUnit }) => {
  const { location, icon, conditions, feels_like, wind_speed, wind_direction, pressure, humidity } = city;
  const temporature = city?.[currentUnit]?.[0];
  const { temp, temp_max, temp_min } = temporature;
  const unit = currentUnit === 'celsius' ? <span>&#8451;</span> : <span>&#8457;</span>;
  return (
    <div>
      {temporature
        ?
        <div>
          <h3 className="large-text">{location}</h3>
          <span className="icon-wrapper">
            <img className="w-[128px]" src={icon} />
          </span>
          <div className="medium-text">
            {conditions} | Feels Like {feels_like}&#8451;
          </div>

          <div className="mt-12">
            <div className="tile-wrapper">
              <div className="tile tile--fuchsia-orange m-0">
                <div className="tile__title">Current temperature</div>
                <div className="tile__unit">{temp}{unit}</div>
              </div>
              <div className="tile tile--fuchsia-orange">
                <div className="tile__title">Maximum temperature</div>
                <div className="tile__unit">{temp_max}{unit}</div>
              </div>
              <div className="tile tile--fuchsia-orange">
                <div className="tile__title">Minimum temperature</div>
                <div className="tile__unit">{temp_min}{unit}</div>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="tile-wrapper">
              <div className="tile tile--fuchsia-pink">
                <div className="tile__title mb-3">Wind Speed</div>
                <div className="tile__unit">{wind_speed} meter/sec</div>
              </div>
              <div className="tile tile--fuchsia-pink">
                <div className="tile__title mb-3">Wind Direction</div>
                <div className="tile__unit">{wind_direction} degrees</div>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="tile-wrapper">
              <div className="tile tile--cyan-indigo">
                <div className="tile__title mb-3">Pressure</div>
                <div className="tile__unit">{pressure} meter/sec</div>
              </div>
              <div className="tile tile--cyan-indigo">
                <div className="tile__title mb-3">Humidity</div>
                <div className="tile__unit">{humidity} %</div>
              </div>
            </div>
          </div>
        </div>
        : <h3>City not found</h3>}
    </div>
  )
}

WeatherReport.propType = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    feels_like: PropTypes.number.isRequired,
    celsius: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired
    }),
    fahrenheit: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired
    }),
    wind_speed: PropTypes.number.isRequired,
    wind_direction: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    conditions: PropTypes.number.isRequired,
  })
}

WeatherReport.defaultProps = {
  celsius: { temp: 0, temp_max: 0, temp_min: 0 },
  fahrenheit: { temp: 0, temp_max: 0, temp_min: 0 }
}
export default memo(WeatherReport);