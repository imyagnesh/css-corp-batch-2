import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ cities, searchCities }) => {
  const cityData = cities?.map((item) => (
    <button type="button" className="btn-weather btn-primary"
      key={item.id}
      name={item}
      onClick={() => searchCities(item)}
    >
      {item}
    </button>
  ));
  return (
    <>
      {cities.length > 0 && (
        <div className="m-3">
          <div id="city-button" className="my-6 mx-6">
            {cityData}
          </div>
        </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  searchCities: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

export default memo(SearchResults);