import React, { forwardRef } from 'react'

const Input = forwardRef(({ getSearchText }, ref) => {
    return (
        <div className="input-box">
            <label className="label">LOCATION</label>
            <input type="text" ref={ref} onChange={getSearchText} />
        </div>
    )
})

export default Input;
