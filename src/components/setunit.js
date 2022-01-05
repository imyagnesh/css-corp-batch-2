import React from "react"
const SetUnit = () => {
    return <div className="flex-1 w-64 h-14 border-solid rounded-md  border-2  border-width-2px">
        <label className="ml-2">UNIT</label><br></br>
        <select id="country" name="country">
            <option>Celcius</option>
            <option>F</option>
        </select>
    </div>
}
export default SetUnit