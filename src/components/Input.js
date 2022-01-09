import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Input = forwardRef((props, ref) => {
  const { searchLocations } = props;
  return (
    <div className='input-box'>
      <label className='label'>Location</label>
      <input type='text' ref={ref} onChange={_.debounce(searchLocations, 500)} />
    </div>
  )
});

Input.propTypes = {
  searchLocations: PropTypes.func.isRequired
};

export default memo(Input);