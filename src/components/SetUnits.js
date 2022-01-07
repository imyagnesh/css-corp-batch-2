import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SetUnits = ({ currentUnit, changeUnits }) => (
  <div className="pt-6 inline-block pr-2 w-1/4">
    <div className="border border-3 bg-white rounded-md">
      <div className="justify-center inline-block mb-4 rounded-md">
        <div className="uppercase w-full pl-3 font-bold">Units</div>
        <select
          className="pl-3 outline-0"
          value={currentUnit}
          onChange={(event) => changeUnits(event)}
        >
          <option value="celcius">Celcius</option>
          <option value="farenheit">Farenheit</option>
        </select>
      </div>
    </div>
  </div>
);

SetUnits.propTypes = {
  currentUnit: PropTypes.string,
  changeUnits: PropTypes.func.isRequired,
};

export default memo(SetUnits);
