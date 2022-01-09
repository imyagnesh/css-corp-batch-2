import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SearchResults = ((props) => {
  const { cityList, setCity } = props;
  return (
    <div className='search-results'>
      {
        cityList.map(city => {
          return (<button type='button' className='search-option' key={city.id} onClick={(e) => setCity(city.id)}>
            {city.name}
          </button>);
        })
      }
    </div>
  )
});

SearchResults.propTypes = {
  cityList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  setCity: PropTypes.func.isRequired,
};
export default memo(SearchResults); 