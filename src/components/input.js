import React, { forwardRef } from "react"
const Input = forwardRef(({ search }, ref) => {
    return <div className="input-box">
        <label className="label"> Location </label>
        <input type="text" ref={ref} onChange={(e) => search(e.target.value)} />
    </div>
})
export default Input