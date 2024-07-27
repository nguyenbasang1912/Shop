import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

const createOrder = createAsyncThunk('order/create', async (body, thunk) => {
  try {
    const response = await axiosInstance.post('/api/order', body);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
});

const getOrder = createAsyncThunk('order/get', async (body, thunk) => {
  try {
    const response = await axiosInstance.get(`/api/order`);
    console.log(response);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
});

export {createOrder, getOrder};
