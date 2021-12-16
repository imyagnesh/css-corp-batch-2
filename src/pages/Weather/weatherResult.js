import React from 'react';
import PropTypes from 'prop-types';

const WeatherResult = ({ cityMatches }) => {
  return (
    <div className="text-center">
      {cityMatches === ''
        ? 'Please enter your location to check weather'
        : cityMatches.city
        ? `${cityMatches.city} city's temperature is ${cityMatches.temp}`
        : `${cityMatches}`}
    </div>
  );
};

WeatherResult.prototype = {
  cityMatches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
      temp: PropTypes.bool,
    }),
  ).isRequired,
};

export default WeatherResult;
