import React, { lazy, Suspense, useContext } from 'react';
import Input from '../../conponents/Input';
import Select from '../../conponents/Select';
import WeatherInfo from './WeatherInfo';
import { units } from '../../constants/variables';
import '../../index.css';

import { WeatherContext } from '../../context/weatherContext';

const SearchResults = lazy(() => import('./SearchResults'));

const Weather = () => {
  const { onChangeLocation, data, onChangeUnit, locationRef } =
    useContext(WeatherContext);
  const { location, unit } = data;

  console.log(locationRef?.current?.value);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div>
        <Input
          id="txtLocation"
          label="Location"
          onChange={onChangeLocation}
          ref={locationRef}
          // value={location}
        />
        <Select
          id="selectUnit"
          label="Units"
          options={units}
          value={unit}
          onChange={onChangeUnit}
        />
        {locationRef?.current?.value?.length > 0 && (
          <Suspense fallback={<h3>Loading...</h3>}>
            <SearchResults />
          </Suspense>
        )}
      </div>
      <WeatherInfo />
    </div>
  );
};

export default Weather;
