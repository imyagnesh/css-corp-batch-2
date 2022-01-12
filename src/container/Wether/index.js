import React, {
  useCallback,
  useReducer,
  lazy,
  Suspense,
  useEffect,
} from 'react';
import Input from '../../conponents/Input';
import Select from '../../conponents/Select';
import WeatherInfo from './WeatherInfo';
import { units } from '../../constants/variables';
import '../../index.css';
import {
  weatherInitValue,
  WeatherReducer,
} from '../../reducers/weatherReducer';
import useDebounce from '../../hooks/useDebounce';

const SearchResults = lazy(() => import('./SearchResults'));
// const WeatherInfo = lazy(() => import('./WeatherInfo'));

const Weather = () => {
  const [state, dispatch] = useReducer(WeatherReducer, weatherInitValue);
  const { location, cities, selectedCity, unit, loading, error } = state;

  const loadCities = useCallback(async (city) => {
    try {
      console.log('load cities');
      dispatch({ type: 'LOAD_CITIES_REQUEST' });
      const res = await fetch(
        `https://api.weatherserver.com/weather/cities/${city}`,
      );
      const json = await res.json();
      dispatch({ type: 'LOAD_CITIES_SUCCESS', payload: json.results });
    } catch (err) {
      dispatch({ type: 'LOAD_CITIES_FAIL', payload: err });
    }
  }, []);

  const debounceLoadCities = useDebounce(loadCities);

  const onChangeLocation = useCallback(
    (event) => {
      const city = event.target.value;
      dispatch({ type: 'CHANGE_LOCATION', payload: city });
      if (city.length > 0) debounceLoadCities(city);
    },
    [debounceLoadCities],
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
        // throw new Error('Something went wrong');
      } catch (err) {
        dispatch({ type: 'LOAD_SELECTED_CITY_FAIL', payload: err });
      }
    },
    [unit],
  );

  const onChangeUnit = useCallback((event) => {
    dispatch({ type: 'CHANGE_UNIT', payload: event.target.value });
  }, []);

  useEffect(() => {
    getCityInfo(1277333);
  }, []);

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
            <SearchResults
              cities={cities}
              getCityInfo={getCityInfo}
              loading={loading}
            />
          </Suspense>
        )}
      </div>
      {error ? (
        <div className="error-panel" />
      ) : loading ? (
        <div className="is-loading" />
      ) : (
        selectedCity && <WeatherInfo data={selectedCity || {}} />
      )}
    </div>
  );
};

export default Weather;
