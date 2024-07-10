import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

const addProductIntoFavorites = createAsyncThunk(
  'product/favorites',
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/api/auth/favorite', body);
      if (response.data) {
        return response.data;
      }
      return [];
    } catch (err) {
      throw err;
    }
  },
);

const addProductToCart = createAsyncThunk(
  'product/cart',
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/api/cart', body);
      if (response.data) {
        return response.data;
      }
      return [];
    } catch (err) {
      throw err;
    }
  },
);

const getCart = createAsyncThunk('product/cart', async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/api/cart/get-cart');
    if (response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    throw error;
  }
});

const updateQuantity = createAsyncThunk(
  'product/cart/quantity',
  async (body, thunk) => {
    try {
      const response = await axiosInstance.put(
        '/api/cart',
        body,
      );
      if (response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      throw error;
    }
  },
);

export {addProductIntoFavorites, addProductToCart, getCart, updateQuantity};
