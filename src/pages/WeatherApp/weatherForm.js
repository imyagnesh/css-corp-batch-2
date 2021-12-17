import React, { forwardRef } from "react"

export const WeatherForm = forwardRef(({filterCity}, ref) => {
  return (
    <form className="flex justify-center my-2" onSubmit={filterCity}>
      <input type="text" className="input" ref={ref} />
      <button type="submit" className="btn-primary">
        Check Weather
      </button>
    </form>
  )
});

export default WeatherForm;