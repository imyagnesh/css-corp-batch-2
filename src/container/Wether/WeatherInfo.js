import React, { memo } from 'react';

const WeatherInfo = ({
  data: { location: cityLocation, conditions, icon, temp, temp_max, temp_min },
}) => (
  <div className="weather-report">
    <h2 className="big">{cityLocation}</h2>
    <p className="conditions">{conditions}</p>
    {icon && <img src={icon} alt="icon" />}
    <div className="temperature">
      <div>
        <h2>Current Temperature</h2>
        <p>{temp}</p>
      </div>
      <div>
        <h2>Max Temperature</h2>
        <p>{temp_max}</p>
      </div>
      <div>
        <h2>Min Temperature</h2>
        <p>{temp_min}</p>
      </div>
    </div>
    <div className="wind">
      <div>
        <h2 />
      </div>
      <div>
        <h2 />
      </div>
    </div>
    <div className="pressure">
      <div>
        <h2 />
      </div>
      <div>
        <h2 />
      </div>
    </div>
  </div>
);

export default memo(WeatherInfo);
