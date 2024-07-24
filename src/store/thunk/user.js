import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

const createNewAddress = createAsyncThunk(
  'user/createNewAddress',
  async (body, thunk) => {
    try {
      const response = await axiosInstance.post('/api/auth/address', body);
      if (response.data.address) {
        return response.data.address;
      }
      return [];
    } catch (error) {
      console.log(error)
      return thunk.rejectWithValue(error.message);
    }
  },
);

const updateAddress = createAsyncThunk(
  'user/updateAddress',
  async (body, thunk) => {
    try {
      const response = await axiosInstance.put(
        `/api/auth/address/${body.id}`,
        body.data,
      );
      if (response.data.address) {
        return response.data.address;
      }
      return [];
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  },
);

const deleteAddress = createAsyncThunk(
  'user/deleteAddress',
  async (id, thunk) => {
    try {
      const response = await axiosInstance.delete(`/api/auth/address/${id}`);
      if (response.data.address) {
        return response.data.address;
      }
      return [];
    } catch {
      return thunk.rejectWithValue('Failed to delete address');
    }
  },
);

export {createNewAddress, updateAddress, deleteAddress};
