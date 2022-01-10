import React, { memo } from 'react';

const SearchResults = ({ cities, getCityInfo }) => {
  console.log('SearchResults Render');
  return (
    <div className="search-results">
      {cities.length === 0 && <p>City not found</p>}
      {cities.map((city) => (
        <div
          className="search-option"
          key={city.id}
          role="button"
          onClick={() => getCityInfo(city.id)}
        >
          {city.name}
        </div>
      ))}
    </div>
  );
};

export default memo(SearchResults);
