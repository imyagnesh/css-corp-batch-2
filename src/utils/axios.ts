import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  timeoutErrorMessage: 'Time out. Please try again...',
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = sessionStorage.getItem('@app/token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (axios.isAxiosError(error)) {
      return Promise.reject(new Error(error.response?.data || error.message));
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
