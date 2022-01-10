import React, { useCallback, useMemo, useState } from 'react';
import Input from '../../conponents/Input';
import Select from '../../conponents/Select';
import '../../index.css';
import SearchResults from './SearchResults';

const units = [
  {
    value: 'C',
    text: 'Celsius',
  },
  {
    value: 'F',
    text: 'Fahrenheit',
  },
];

const Weather = () => {
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [unit, setUnit] = useState('C');

  const loadCities = useCallback(async (city) => {
    try {
      const res = await fetch(
        `https://api.weatherserver.com/weather/cities/${city}`,
      );
      const json = await res.json();
      setCities(json.results);
    } catch (error) {}
  }, []);

  const onChangeLocation = useCallback(
    (event) => {
      const city = event.target.value;
      setLocation(city);
      loadCities(city);
    },
    [loadCities],
  );

  const getCityInfo = useCallback(
    async (id) => {
      try {
        const res = await fetch(
          `https://api.weatherserver.com/weather/current/${id}/${unit}`,
        );
        const json = await res.json();
        setSelectedCity(json);
        setLocation('');
      } catch (error) {}
    },
    [unit],
  );

  const onChangeUnit = useCallback((event) => {
    setUnit(event.target.value);
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
          <SearchResults cities={cities} getCityInfo={getCityInfo} />
        )}
      </div>
    </div>
  );
};

export default Weather;
