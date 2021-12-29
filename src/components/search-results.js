import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const SearchResults = ({ cities, getWeather, invalidCity, apiStatus }) => {
  const isLoading = apiStatus?.status === 'REQUEST';
  const isFailed = apiStatus?.status === 'FAILED';
  return (
    <div className={cn("popover", { "hidden": (!invalidCity && !cities.length) })}>
      {isLoading
        ? <div className="is-loading" role="status" />
        : <div className="relative w-full">
          {invalidCity
            ? <h3 className="normal-case">
              <span className="code-text">{invalidCity}</span> is not exists in the record <span className="text-sm text-slate-500">{`{Try like 'Che' or 'Ban'}`}</span>
            </h3>
            : cities?.map(city => {
              return (
                <button key={city.id} type="button" onClick={() => getWeather(city.id)} className="pink-button">
                  {city.name}
                </button>
              )
            })}
          {isFailed && <div className="error-panel" />}
        </div>
      }
    </div>
  )
}

SearchResults.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      location: PropTypes.string,
      icon: PropTypes.string,
      feels_like: PropTypes.number,
      conditions: PropTypes.string,
      celsius: PropTypes.shape({
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number
      }),
      fahrenheit: PropTypes.shape({
        temp: PropTypes.number,
        temp_max: PropTypes.number,
        temp_min: PropTypes.number
      }),
      wind_speed: PropTypes.number,
      wind_direction: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    })
  ),
  getWeather: PropTypes.func.isRequired,
  invalidCity: PropTypes.string,
  apiStatus: PropTypes.shape({
    type: PropTypes.string,
    status: PropTypes.oneOf(['REQUEST', 'FAILED']),
    payload: PropTypes.objectOf(Error)
  })
}

SearchResults.defaultProps = {
  cities: [],
  invalidCity: null,
  apiStatus: null,
  celsius: { temp: 0, temp_max: 0, temp_min: 0 },
  fahrenheit: { temp: 0, temp_max: 0, temp_min: 0 }
}

export default memo(SearchResults);