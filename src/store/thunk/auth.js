import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

const login = createAsyncThunk('auth/login', async (body, thunk) => {
  try {
    const res = await axiosInstance.post('/api/auth/login', body);
    return res;
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
});

const getMe = createAsyncThunk('auth/getMe', async (body, thunk) => {
  try {
    const res = await axiosInstance.post('/api/auth');
    return res.data;
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk('/auth/logout', async (body, thunk) => {
  try {
    await axiosInstance.post('/api/auth/logout');
    return true
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
})

export {login, getMe, logoutUser};
