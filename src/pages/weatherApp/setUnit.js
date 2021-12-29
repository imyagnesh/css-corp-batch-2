import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WeatherConsumer } from './context/weatherContext';
import propTypes from 'prop-types';

const setUnit = () => {
    console.log('Unit render');
    return (
        <WeatherConsumer>
            {({ changeUnit, units }) => (
                <div className="w-1/3 bg-[#F1F1F1] rounded p-2 uppercase text-sm border">
                    <h3>Units</h3>
                    <div className="flex items-center">
                        <select className="mt-4 pb-1 w-full bg-transparent font-bold outline-none capitalize" id="unit-filter" onChange={(event) => (changeUnit(event))}>
                            {units.map(({ key, title }) => (
                                <option value={key} key={key}>{title}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </WeatherConsumer>
    )
}

setUnit.propTypes = {
    changeUnit: propTypes.func,
    units: propTypes.shape({
        key: PropTypes.string,
        title: PropTypes.string
    })
}

export default memo(setUnit);

