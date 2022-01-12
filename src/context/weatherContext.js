import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import useDebounce from '../hooks/useDebounce';
import { weatherInitValue, WeatherReducer } from '../reducers/weatherReducer';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, weatherInitValue);
  const locationRef = useRef();

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

  const onChangeLocation = useCallback(() => {
    //   const city = event.target.value;
    //   dispatch({ type: 'CHANGE_LOCATION', payload: city });
    const city = locationRef.current.value;
    console.log(city);
    if (city.length > 0) debounceLoadCities(city);
  }, [debounceLoadCities]);

  const getCityInfo = useCallback(async (id) => {
    try {
      dispatch({ type: 'LOAD_SELECTED_CITY_REQUEST' });
      const res = await fetch(
        `https://api.weatherserver.com/weather/current/${id}/${state.unit}`,
      );
      const json = await res.json();
      locationRef.current.value = '';
      dispatch({ type: 'LOAD_SELECTED_CITY_SUCCESS', payload: json });
      // throw new Error('Something went wrong');
    } catch (err) {
      dispatch({ type: 'LOAD_SELECTED_CITY_FAIL', payload: err });
    }
  }, []);

  const onChangeUnit = useCallback((event) => {
    dispatch({ type: 'CHANGE_UNIT', payload: event.target.value });
  }, []);

  useEffect(() => {
    getCityInfo(1277333);
  }, []);

  const value = useMemo(
    () => ({
      onChangeUnit,
      onChangeLocation,
      getCityInfo,
      data: state,
      locationRef,
    }),
    [onChangeUnit, onChangeLocation, state],
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
