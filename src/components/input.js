import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import Overlay from './overlay';


const Input = forwardRef(({ searchCities, apiStatus }, ref) => {
  const isLoading = apiStatus?.status === 'REQUEST';
  const isFailed = apiStatus?.status === 'FAILED';
  return (
    <div className="relative min-h-[52px]">
      <h3 className="sub-title">Location</h3>
      <input
        type="text"
        ref={ref}
        onChange={searchCities}
        className="text-box"
        placeholder="Enter the location"
        required />
      {isLoading && <Overlay className="is-loading" />}
      {isFailed && <Overlay className="error-panel" />}
    </div>
  )
});

Input.propTypes = {
  searchCities: PropTypes.func.isRequired,
  apiStatus: PropTypes.shape({
    type: PropTypes.string,
    status: PropTypes.oneOf(['REQUEST', 'FAILED']),
    payload: PropTypes.objectOf(Error)
  })
}

Input.defaultProps = {
  apiStatus: null
}

export default memo(Input);