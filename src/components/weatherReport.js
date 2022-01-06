import React from "react"

const WeatherReport = ({ city, unit }) => {
  const { location, temp, temp_max, temp_min, wind_speed, wind_direction, pressure, humidity, conditions, feels_like, icon } = city;
  const units = (unit === 'C') ? 'C' : 'F';
  return (
    <div className="weather-report">
      <div className="big">{location}</div>
      <div >{conditions}|{feels_like} {units}</div>
      <img src={icon} />
      <div className="temperature">
        <div><p>Current Temperature</p><h2>{temp} {units}</h2></div>
        <div><p>Maximun Temperature</p><h2>{temp_max} {units}</h2></div>
        <div><p>Minimum Temperature</p><h2>{temp_min} {units}</h2></div>
      </div>
      <div className="wind">
        <div><p>Wind Speed</p><h2>{wind_speed} meter/sec </h2></div>
        <div><p>Wind Direction</p><h2>{wind_direction} degrees</h2></div>
      </div>
      <div className="pressure">
        <div><p>Pressure</p><h2>{pressure} hPa</h2></div>
        <div><p>Humidity</p><h2>{humidity} %</h2></div>
      </div>
    </div>
  );
};

export default WeatherReport