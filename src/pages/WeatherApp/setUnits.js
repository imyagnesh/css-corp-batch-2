import React from 'react';
import propTypes from 'prop-types';

const SetUnits = (props) => {
  return(
    <div className='w-48 md:w-30 weather-app-search--metric'>
      <p>Units</p>
      <select className='w-full' onChange={props.changeTemperatureMetrics}>
        <option value="C">Celsius</option>
        <option value="F">Farenheit</option>
      </select>
    </div>
  );
};

SetUnits.propTypes = {
  changeTemperatureMetrics: propTypes.func.isRequired
}

export default SetUnits;