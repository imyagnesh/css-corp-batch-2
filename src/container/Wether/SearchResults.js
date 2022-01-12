import React, { memo } from 'react';

const SearchResults = ({ cities, getCityInfo, loading }) => (
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

export default memo(SearchResults);
