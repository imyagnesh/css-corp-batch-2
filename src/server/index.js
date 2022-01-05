import { Server } from 'miragejs';
import weatherData from './raw.json';

const k2c = (k) => Math.round(k - 273.15);
const k2f = (k) => Math.round((k - 273.15) * 1.8 + 32);
const getWeatherData = (cityId, tempUnits) => {
  const wd = weatherData.find((ds) => ds.id === Number(cityId));
  const convertor = tempUnits === 'C' ? k2c : k2f;

  return wd
    ? {
      location: wd.name,
      temp: convertor(wd.main.temp),
      temp_min: convertor(wd.main.temp_min),
      temp_max: convertor(wd.main.temp_max),
      feels_like: convertor(wd.main.feels_like),
      pressure: wd.main.pressure,
      humidity: wd.main.humidity,
      conditions: wd.weather[0].description.toUpperCase(),
      icon: `http://openweathermap.org/img/wn/${wd.weather[0].icon}@2x.png`,
      wind_speed: wd.wind.speed,
      wind_direction: wd.wind.deg,
    }
    : {
      error: 'Weather data not found',
    };
};

const getCities = (keyword) => weatherData
  .filter((d) => d.name.toLowerCase().includes(keyword.toLowerCase()))
  .map((data) => ({
    id: data.id,
    name: data.name,
  }));

function weatherServer({ environment = 'development' } = {}) {
  return new Server({
    environment,
    routes() {
      this.urlPrefix = 'https://api.weatherserver.com';
      this.namespace = 'weather';

      this.get('/current/:cityId/:tempUnits', (_, request) => {
        const city = Number(request.params.cityId) !== 0 ? request.params.cityId : 1277333;
        const { tempUnits } = request.params;
        const getMap = getWeatherData(city, tempUnits);

        return getMap;
      });

      this.get('/cities', () => ({
        results: [],
      }));

      this.get('/cities/:city', (_, request) => {
        const { city } = request.params;
        const getCity = getCities(city);

        return { results: getCity || [] };
      });
    },
  });
}

export default weatherServer;
