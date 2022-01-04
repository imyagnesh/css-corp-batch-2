import React, {memo} from 'react'
import PropTypes from 'prop-types';

const SetUnits = (props) => {
  const {temperatureUnits, updateTemperatureUnits} = props;
  return (
    <div className='inline-flex w-4/12 flex-col'>
      <p className='uppercase flex-none font-bold'>Units</p>
      <select onChange={updateTemperatureUnits} value={temperatureUnits}>
        <option value={'metric'}>Celsius</option>
        <option value={'imperial'}>Farenheit</option>
      </select>
    </div>
  )
};

SetUnits.propTypes = {
  temperatureUnits: PropTypes.oneOf(['metric', 'imperial']).isRequired,
  updateTemperatureUnits: PropTypes.func.isRequired
}

SetUnits.displayName = 'SetUnits';

export default memo(SetUnits);
