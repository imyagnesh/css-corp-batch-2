import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Input = forwardRef((props, ref) => {
  return (
    <div className='inline-flex flex-1 flex-col'>
      <p className='uppercase flex-none font-bold'>Location</p>
      <input type='text' onChange={_.debounce(props.searchText, 500)} ref={ref} className='border-gray-300 shadow-sm text-black border-b'/>
    </div>
  )
});

Input.propTypes = {
  searchText: PropTypes.func.isRequired
};

Input.displayName = 'Input';

export default memo(Input);