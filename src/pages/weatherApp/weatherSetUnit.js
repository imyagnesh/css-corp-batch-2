import React, { memo } from 'react';
import propTypes from 'prop-types';
import { WeatherConsumer } from './context/weatherContext';

const setUnit = () => (
  <WeatherConsumer>
    {({ changeUnit, units }) => (
      <div className="w-1/3 bg-[#F1F1F1] rounded p-2 uppercase text-sm border">
        <h3>Units</h3>
        <div className="flex items-center">
          <select className="h-10 mt-1 pb-1 w-full bg-transparent font-bold outline-none capitalize bg-[#ffffff]" id="unit-filter" onChange={(event) => (changeUnit(event))}>
            {units.map(({ key, title }) => (
              <option value={key} key={key}>{title}</option>
            ))}
          </select>
        </div>
      </div>
    )}
  </WeatherConsumer>
);

setUnit.propTypes = {
  changeUnit: propTypes.func,
  units: propTypes.shape({
    key: propTypes.string,
    title: propTypes.string,
  }),
};

export default memo(setUnit);
