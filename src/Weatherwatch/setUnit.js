import React from "react"
const SetUnit = ({ setUnit }) => {

    return (
        <div className="set-units">
            <label >Units</label>
            <select onChange={(e) => { setUnit(e.target.value) }}>
                <option value="C">Celcius</option>
                <option value="F">Farenheit</option>
            </select>

        </div>
    );
};

export default SetUnit