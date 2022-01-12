export const weatherInitValue = {
  location: '',
  cities: [],
  selectedCity: null,
  unit: 'C',
  loading: false,
  error: null,
};

export const WeatherReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LOCATION':
      return { ...state, location: payload };

    case 'CHANGE_UNIT':
      return { ...state, unit: payload };

    case 'LOAD_CITIES_REQUEST':
    case 'LOAD_SELECTED_CITY_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_CITIES_FAIL':
    case 'LOAD_SELECTED_CITY_FAIL':
      return { ...state, error: payload };

    case 'LOAD_CITIES_SUCCESS':
      return {
        ...state,
        cities: payload,
        loading: false,
        error: null,
        selectedCity: null,
      };

    case 'LOAD_SELECTED_CITY_SUCCESS':
      return {
        ...state,
        selectedCity: payload,
        loading: false,
        error: null,
        location: '',
      };

    default:
      break;
  }
};
