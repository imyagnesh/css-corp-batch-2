import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const SearchResults = ({ cities, getWeather, invalidCity }) => {
  return (
    <div className={cn("absolute w-full top-full flex mt-1 mr-1 bg-white p-8 rounded-md shadow-xl z-10 capitalize", {
      "hidden": (!invalidCity && !cities.length)
    })}>
      {invalidCity
        ? <h3 className="normal-case">
          <span className="font-semibold underline decoration-pink-500 decoration-2">{invalidCity}</span> is not exists in the record <span className="text-sm text-slate-500">{`{Ex: Che}`}</span>
        </h3>
        : cities?.map(city => {
          return (
            <button key={city.id} type="button" onClick={() => getWeather(city.id)} className="px-5 py-1 mr-2 text-sm font-semibold tracking-wider bg-gradient-to-r from-rose-500 to-fuchsia-800 text-white rounded-full">
              {city.name}
            </button>
          )
        })}
    </div>
  )
}

SearchResults.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      feels_like: PropTypes.number.isRequired,
      conditions: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      wind_speed: PropTypes.number.isRequired,
      wind_direction: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    })
  ),
  getWeather: PropTypes.func.isRequired,
  invalidCity: PropTypes.string
}

SearchResults.defaultValues = {
  invalidCity: null
}

export default memo(SearchResults);