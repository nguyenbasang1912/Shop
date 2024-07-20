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

const deleteProductInFavorite = createAsyncThunk(
  'product/favorites/delete',
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/api/auth/favorite/${body}`);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      throw error;
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
      const response = await axiosInstance.put('/api/cart', body);
      if (response.data) {
        return response.data;
      }
      return [];
    } catch (error) {
      throw error;
    }
  },
);

const deleteProduct = createAsyncThunk(
  'product/cart/delete',
  async (body, thunk) => {
    try {
      const response = await axiosInstance.post(`/api/cart/delete`, body);
      console.log(response);
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
  addProductIntoFavorites,
  addProductToCart,
  getCart,
  updateQuantity,
  deleteProduct,
  deleteProductInFavorite,
  fetchProducts,
  fetchSaleOffProducts,
};
