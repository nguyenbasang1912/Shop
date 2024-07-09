import axios from 'axios';
import {store} from '../store/store';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.191.1:3000',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
  if (store.getState().auth.accessToken) {
    config.headers['Authorization'] = `Bearer ${
      store.getState().auth.accessToken
    }`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    console.log('error: config', error.config);
  },
);

export default axiosInstance;
