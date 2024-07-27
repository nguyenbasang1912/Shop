import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

const createNewAddress = createAsyncThunk(
  'user/createNewAddress',
  async (body, thunk) => {
    try {
      const response = await axiosInstance.post('/api/auth/address', body);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
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
      if (response.data) {
        return response.data;
      }
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

const editUser = createAsyncThunk('user/editUser', async (body, thunk) => {
  let avatar = new FormData();
  if (body.ava) {
    avatar.append('avatar', {
      name: body.ava.fileName,
      type: body.ava.type,
      uri: body.ava.uri,
    });
  }

  try {
    const response = await axiosInstance.post(
      `/api/auth`,
      {...body.data, avatar},
      {
        headers: {
          'Content-Type': avatar ? 'multipart/form-data' : 'application/json',
        },
      },
    );
    return;
  } catch (e) {
    return thunk.rejectWithValue(e.message);
  }
});

export {createNewAddress, updateAddress, deleteAddress, editUser};
