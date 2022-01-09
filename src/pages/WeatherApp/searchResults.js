import React from 'react';
import propTypes from 'prop-types';

const SearchResults = (props) => {
  const {citySearchResults, getWeatherDetails} = props;
  return (
    <div className='weather-app-search-results relative'>
      {
        citySearchResults?.results.map((city) => {
          return <button key={city.id} id={city.id} onClick={(e) => getWeatherDetails(city.id)}>{city.name}</button>
        })
      }
    </div>
  )
};

SearchResults.propTypes = {
    getWeatherDetails: propTypes.func.isRequired,
    citySearchResults: propTypes.shape({
      id: propTypes.number,
      name: propTypes.string
    })
}
export default SearchResults;