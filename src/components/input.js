import React, { forwardRef } from "react"
const Input = forwardRef((props, ref) => {
    return <div className="flex-1 w-64 h-14 mb-8 border-2 border-width-2px">
        <label>Location</label><br></br>
        <input type="text" ref={ref} name="first-name" id="first-name" onChange={props.getInput} />
    </div>
})
export default Input