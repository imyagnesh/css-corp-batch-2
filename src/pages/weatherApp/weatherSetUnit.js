import React, { forwardRef, memo } from 'react';

const SetUnits = ({ currentUnit, changeUnits }) => (
  <div className="pt-6 inline-block pr-2 w-1/4">
    <div className="border border-3">
      <div className="inline-block mb-4">
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
export default memo(SetUnits);
