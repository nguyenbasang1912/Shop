import {createSlice} from '@reduxjs/toolkit';
import {addProductIntoFavorites, addProductToCart, updateQuantity} from '../thunk/cart';

const initialState = {
  favorites: [],
  products: [],
  cart: []
};

const favoriteSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(addProductIntoFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload.favorites;
    }).addCase(addProductToCart.fulfilled, (state, action) => {
      state.cart = action.payload.products
    }).addCase(updateQuantity.fulfilled, (state, action) => {
      state.cart = action.payload.products;
    });
  },
});

export const cartReducer = favoriteSlice.reducer;
