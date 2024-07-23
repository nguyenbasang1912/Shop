import {createSlice} from '@reduxjs/toolkit';
import {
  addProductIntoFavorites,
  deleteProductInFavorite,
} from '../thunk/favorite';
import {getMe} from '../thunk/auth';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addProductIntoFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      })
      .addCase(deleteProductInFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.favorites = action.payload.user.favorites;
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const {} = favoriteSlice.actions;
