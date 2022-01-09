import React, { forwardRef } from 'react';
import propTypes from 'prop-types';

const Input = forwardRef((props, ref) => {
  return(
    <div className='weather-app-search--input'>
      <p>Location</p>
      <input
         type="text"
         ref={ref}
         onChange={props.getCity} 
      />
    </div>
  )
});

Input.propTypes = {
  getCity: propTypes.func.isRequired
};

export default Input;