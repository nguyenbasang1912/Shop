import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

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
      return thunkAPI.rejectWithValue(err.message);
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

export {
  addProductIntoFavorites,
  deleteProductInFavorite
}