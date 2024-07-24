import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  history: {
    delivered: [],
    processing: [],
  },
  order: {
    isSuccess: false,
    isLoading: false,
    err: false,
    order: {},
  }
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
});
