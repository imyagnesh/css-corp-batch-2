import React, { memo } from 'react';

const SetUnits = ({ changeMetrics, units, setUnits }) => {
    return (
        <div className="set-units">
            <label>Units</label>
            <select
                value={changeMetrics}
                onChange={(event) => setUnits(event)}
            >
                <option value="celcius">Celcius</option>
                <option value="farenheit">Farenheit</option>
            </select>
        </div>
    )

};

export default memo(SetUnits);