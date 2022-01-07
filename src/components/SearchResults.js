import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ cities, searchCities }) => {
  const cityData = Object.keys(cities)?.map((item, i) => (
    <button
      type="button"
      className="btn-city btn-primary my-1"
      key={i}
      name={item}
      onClick={() => searchCities(cities[item].id)}
    >
      {cities[item].name}
    </button>
  ));
  return (
    <>
      {cities.length > 0 && (
        <div className="bg-white m-3 rounded">
          <div id="city-button" className="my-3 mx-5 bg-white p-1">
            {cityData}
          </div>
        </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  searchCities: PropTypes.func.isRequired,
  cities: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default memo(SearchResults);
