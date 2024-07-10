import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

const login = createAsyncThunk('auth/login', async (body, thunkApi) => {
  try {
    const response = await axiosInstance.post('/api/auth/login', body);
    return response;
  } catch (error) {
    console.log('login error: ' + error);
    return thunkApi.rejectWithValue(true);
  }
});

const getInfo = createAsyncThunk('auth/getInfo', async (body, thunkApi) => {
  try {
    const response = await axiosInstance.post('/api/auth');
    return response;
  } catch (error) {
    console.log('getInfo error: ' + error);
    return thunkApi.rejectWithValue(true);
  }
});

export {login, getInfo};
