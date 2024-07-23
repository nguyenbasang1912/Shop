import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import { navigationRef } from '../navigator/RootNavigation';
import { stackName } from '../navigator/routeName';
import { logoutLocal, updateTokens } from '../store/slices/auth';
import { store } from '../store/store';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.191.1:3000',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
  if (store.getState().auth?.tokens?.accessToken) {
    config.headers['Authorization'] =
      'Bearer ' + store.getState().auth.tokens.accessToken;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response.data,
  async error => {
    const originRequest = error.config;
    if (
      error.response.data.message === 'jwt expired' &&
      error.response.status === 401
    ) {
      const refreshToken = store.getState().auth.tokens.refreshToken;
      const response = await axiosInstance.post('/api/auth/renew-tokens', {
        refreshToken: refreshToken,
      });

      store.dispatch(updateTokens(response.data));

      originRequest.headers['Authorization'] =
        'Bearer ' + response.data.accessToken;

      const originResponse = await axiosInstance(originRequest);

      console.log('url', originRequest.url);
      return originResponse;
    } else if (
      error.response.status === 403 ||
      (error.response.status === 401 &&
        error.response.data.message === 'No token provided')
    ) {
      store.dispatch(logoutLocal());
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: stackName.login,
            },
          ],
        }),
      );
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
