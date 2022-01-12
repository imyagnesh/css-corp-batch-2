import React, { memo, useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';

const SearchResults = () => {
  const {
    getCityInfo,
    data: { loading, cities },
  } = useContext(WeatherContext);

  return (
    <div className="search-results">
      {loading ? (
        <p>Loading...</p>
      ) : cities.length > 0 ? (
        cities.map((city) => (
          <div
            className="search-option"
            key={city.id}
            role="button"
            onClick={() => getCityInfo(city.id)}
          >
            {city.name}
          </div>
        ))
      ) : (
        <p>City not found</p>
      )}
    </div>
  );
};

export default memo(SearchResults);
