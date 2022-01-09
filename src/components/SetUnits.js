import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const SetUnits = ((props) => {
  const { setUnit } = props;
  return (
    <div className='set-units'>
      <label className='label'>Units</label>
      <select onChange={(e) => setUnit(e.target.value)}>
        <option value='C'>Celcius</option>
        <option value='F'>Farenheit</option>
      </select>
    </div >
  )
});

SetUnits.propTypes = {
  setUnit: PropTypes.func.isRequired,
};

export default memo(SetUnits); 