import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

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
      return thunkAPI.rejectWithValue(err.message);
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
      const response = await axiosInstance.put('/api/cart', body);
      if (response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      console.log('updateQuantity error: ', error);
      return thunk.rejectWithValue(error.message);
    }
  },
);

const deleteProduct = createAsyncThunk(
  'product/cart/delete',
  async (body, thunk) => {
    try {
      const response = await axiosInstance.post(`/api/cart/delete`, body);
      if (response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      throw error;
    }
  },
);

const fetchProducts = createAsyncThunk(
  'product/fetch',
  async (body, thunkApi) => {
    try {
      const response = await axiosInstance.get(
        `/api/product?type=cate_id&payload=${body.categoryId}&page=${body.page}`,
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('fetch products failed');
    }
  },
);

const fetchSaleOffProducts = createAsyncThunk(
  'product/fetchSaleOff',
  async (body, thunkApi) => {
    try {
      const response = await axiosInstance.get(
        `/api/product?type=sale_off&page=${body.page}`,
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue('fetch sale_off products failed');
    }
  },
);

export {
  addProductToCart,
  getCart,
  updateQuantity,
  deleteProduct,
  fetchProducts,
  fetchSaleOffProducts,
};
