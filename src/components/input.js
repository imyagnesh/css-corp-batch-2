import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ searchCities, apiStatus }, ref) => {
  const isLoading = apiStatus?.status === 'REQUEST';
  const isFailed = apiStatus?.status === 'FAILED';
  return (
    <div className="relative min-h-[52px]">
      {isLoading
        ? <div className="is-loading" role="status" />
        : <>
          <h3 className="text-md font-semibold">Location</h3>
          <input
            type="text"
            ref={ref}
            onChange={searchCities}
            className="w-full text-md font-semibold rounded-none pt-1 placeholder:text-sm placeholder:font-normal placeholder:normal-case placeholder-gray-500 capitalize rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Enter the location"
            required />
          {isFailed && <div className="error-panel" />}
        </>
      }
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