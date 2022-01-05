import React from "react"
const WeatherReport = ({ currentcity }) => {
    console.log(currentcity)
    const { wind_speed, pressure, humidity, wind_direction, location, conditions } = currentcity;
    const { temp, temp_min, temp_max } = currentcity.celsius[0];
    return <div className="xyz text-white text-sm text-center rounded-md">
        <h1 className="text-black italc font bold text-5xl text-left"> {location} </h1>
        <div className="text-sm text-black mb-5 text-left">{conditions}</div>
        <div className="flex">
            <div className="flex-1 w-64 h-14 border-solid rounded-md  border-2 bg-fuchsia-500 border-width-2px border-top-left-radius: 0.5rem">
                CURRENT TEMPRATURE
                <div className="font-bold">{temp}' C</div>
            </div>
            <div className="flex-1 w-64 h-14 border-solid rounded-md border-2 bg-fuchsia-500 border-width-2px border-top-left-radius: 0.5rem">
                MAXIMUM TEMPRATURE
                <div className="font-bold">{temp_max}' C</div>
            </div>
            <div className="flex-1 w-32  border-solid h-14 border-2 bg-fuchsia-500 rounded-md">
                MINIMUM   TEMPRATURE
                <div className="font-bold">{temp_min}' C</div>
            </div>
        </div>
        <div className="flex">
            <div className="flex-1 w-64 h-14 border-solid rounded-md border-2 bg-fuchsia-500 border-width-2px border-top-left-radius: 0.5rem">
                WIND SPEED
                <div className="font-bold">{wind_speed} meter/sec</div>
            </div>
            <div className="flex-1 w-64 h-14 border-solid rounded-md border-2 bg-fuchsia-500 border-width-2px border-top-left-radius: 0.5rem">
                WIND DIRECTION
                <div className="font-bold">{wind_direction} degrees</div>
            </div>
        </div>
        <div className="flex">
            <div className="flex-1 w-64 h-14 border-solid rounded-md border-2 bg-fuchsia-500 border-width-2px border-top-left-radius: 0.5rem">
                PRESURE
                <div className="font-bold">{pressure} hPa</div>
            </div>
            <div className="flex-1 w-64 h-14 border-solid rounded-md border-2 bg-fuchsia-500 border-width-2px border-top-left-radius: 0.5rem">
                HUMIDITY
                <div className="font-bold">{humidity}%</div>
            </div>
        </div>
    </div>
}
export default WeatherReport