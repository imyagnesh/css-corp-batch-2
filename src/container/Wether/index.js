import React, { useCallback, useReducer, lazy, Suspense } from 'react';
import Input from '../../conponents/Input';
import Select from '../../conponents/Select';
import { units } from '../../constants/variables';
import '../../index.css';
import {
  weatherInitValue,
  WeatherReducer,
} from '../../reducers/weatherReducer';

const SearchResults = lazy(() => import('./SearchResults'));
const WeatherInfo = lazy(() => import('./WeatherInfo'));

const Weather = () => {
  const [state, dispatch] = useReducer(WeatherReducer, weatherInitValue);

  const { location, cities, selectedCity, unit } = state;

  const loadCities = useCallback(async (city) => {
    try {
      dispatch({ type: 'LOAD_CITIES_REQUEST' });
      const res = await fetch(
        `https://api.weatherserver.com/weather/cities/${city}`,
      );
      const json = await res.json();
      dispatch({ type: 'LOAD_CITIES_SUCCESS', payload: json.results });
    } catch (error) {
      dispatch({ type: 'LOAD_CITIES_FAIL', payload: error });
    }
  }, []);

  const onChangeLocation = useCallback(
    (event) => {
      const city = event.target.value;
      dispatch({ type: 'CHANGE_LOCATION', payload: city });
      loadCities(city);
    },
    [loadCities],
  );

  const getCityInfo = useCallback(
    async (id) => {
      try {
        dispatch({ type: 'LOAD_SELECTED_CITY_REQUEST' });
        const res = await fetch(
          `https://api.weatherserver.com/weather/current/${id}/${unit}`,
        );
        const json = await res.json();
        dispatch({ type: 'LOAD_SELECTED_CITY_SUCCESS', payload: json });
      } catch (error) {
        dispatch({ type: 'LOAD_SELECTED_CITY_FAIL', payload: error });
      }
    },
    [unit],
  );

  const onChangeUnit = useCallback((event) => {
    dispatch({ type: 'CHANGE_UNIT', payload: event.target.value });
  }, []);

  console.log('Weather Render');

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div>
        <Input
          id="txtLocation"
          label="Location"
          onChange={onChangeLocation}
          value={location}
        />
        <Select
          id="selectUnit"
          label="Units"
          options={units}
          value={unit}
          onChange={onChangeUnit}
        />
        {location.length > 0 && (
          <Suspense fallback={<h3>Loading...</h3>}>
            <SearchResults cities={cities} getCityInfo={getCityInfo} />
          </Suspense>
        )}
      </div>
      {selectedCity && (
        <Suspense fallback={<h3>Loading...</h3>}>
          <WeatherInfo data={selectedCity || {}} />
        </Suspense>
      )}
    </div>
  );
};

export default Weather;
