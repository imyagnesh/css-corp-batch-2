import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SetUnits = ({ setUnits, apiStatus }) => {
  const isLoading = apiStatus?.status === 'REQUEST';
  return (
    <div>
      {isLoading
        ? <div className="is-loading" role="status" />
        : <>
          <h3 className="text-md font-semibold">Units</h3>
          <select onChange={(e) => setUnits(e.target.value)} className="w-full focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 p-0 border-transparent bg-transparent text-sm font-semibold text-black rounded-md">
            <option value="C">Celcuis</option>
            <option value="F">Farenheit</option>
          </select>
        </>
      }
    </div>
  )
}

SetUnits.propTypes = {
  setUnits: PropTypes.func.isRequired,
  apiStatus: PropTypes.shape({
    type: PropTypes.string,
    status: PropTypes.oneOf(['REQUEST', 'FAILED']),
    payload: PropTypes.objectOf(Error)
  })
}
SetUnits.defautlProps = {
  apiStatus: null
}

export default memo(SetUnits);