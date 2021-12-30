import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const WeatherForm = forwardRef(({ weatherForecast }, ref) => {
  return (
    <form className="flex justify-center my-2" onSubmit={weatherForecast}>
      <input type="text" className="input" ref={ref} />
      <button type="submit" className="btn-primary">
        Check Weather
      </button>
    </form>
  );
});

WeatherForm.propTypes = {
  weatherForecast: PropTypes.func.isRequired,
};

export default memo(WeatherForm);
