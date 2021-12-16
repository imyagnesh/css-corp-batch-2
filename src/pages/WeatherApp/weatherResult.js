import React, {memo} from 'react'

const WeatherResult = ({ filteredCity, cityToFilter }) => {
  return (
    <div className="flex justify-center">
      {
        Boolean(filteredCity) 
          ? (
          <div className="flex items-center m-2">
            Temperature of {filteredCity.name} is {filteredCity.temp} &deg;C
          </div>
          ) : (
            Boolean(cityToFilter) && 
            <div className="flex items-center m-2">
              {cityToFilter.charAt(0).toUpperCase() + cityToFilter.slice(1)} is not found in our database.
            </div>
          )
      }
    </div>
  )
}

export default memo(WeatherResult);
