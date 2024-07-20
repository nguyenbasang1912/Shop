import axios from 'axios';
import {store} from '../store/store';
import {updateTokens} from '../store/slices/auth';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.191.1:3000',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
  // config.headers['Authorization'] =
  //   'Bearer ' + store.getState().auth.accessToken ||
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjhkMGRiYjNlYTE5N2JlYjM3YmJiNTYiLCJlbWFpbCI6IjIiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyMDU3NDUyNSwiZXhwIjoxNzIwNTc4MTI1fQ.UJf6Yy_956caOTdiekFhkQVj3-NwJri_VbHkyz5Nrco';

  config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjhkMGRiYjNlYTE5N2JlYjM3YmJiNTYiLCJlbWFpbCI6IjIiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyMDU4MjQxMSwiZXhwIjoxNzIwNjAwNDExfQ.7EtVtvfmjx0PLUq40YzSGuR7B9T-ceHh6gAbl5laBq4'
  return config;
});

axiosInstance.interceptors.response.use(
  response => response.data,
  async error => {
    const originRequest = error.config;

    if (error.response) {
      if (
        error.response.status === 401 &&
        error.response.data.message === 'jwt expired'
      ) {
        try {
          const {data} = await axiosInstance
            .post('/api/auth/renew-tokens', {
              refreshToken:
                store.getState().auth.refreshToken ||
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjhkMGRiYjNlYTE5N2JlYjM3YmJiNTYiLCJlbWFpbCI6IjIiLCJyb2xlIjoidXNlciIsImlhdCI6MTcyMDU3NDUyNSwiZXhwIjoxNzIxMTc5MzI1fQ.4KKlq4KLSPTT_nDiuI4ElRxcSeDvdDUd7zBLQZ1UhD8',
            })
            .then(response => response.data);

          store.dispatch(updateTokens(data));

          return axiosInstance(originRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }
    }
  },
);

export default axiosInstance;
