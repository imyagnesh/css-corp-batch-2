import React from 'react'

const SetUnits = ({ changeUnits }) => {
    return (
        <div className="set-units">
            <label className="label">UNITS</label>
            <select onChange={(e) => changeUnits(e.target.value)}>
                <option value="C">Celcius</option>
                <option value="F">Fahrenheit</option>
            </select>
        </div>
    )
}


export default SetUnits;