import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WeatherConsumer } from '../context/weatherContext';
import propTypes from 'prop-types';

const setUnit = () => {
    return (
        <WeatherConsumer>
            {({ changeUnit, units }) => (
                <div className="w-1/3 bg-white rounded p-2 uppercase text-sm border">
                    <h3>Units</h3>
                    <div className="flex items-center">
                        <select className="mt-4 pb-1 w-full bg-transparent font-bold outline-none capitalize" id="unit-filter" onChange={(event) => (changeUnit(event))}>
                            {units.map(({ key, name }) => (
                                <option value={key} key={key}>{name}</option>
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
        name: PropTypes.string
    })
}

export default memo(setUnit);

