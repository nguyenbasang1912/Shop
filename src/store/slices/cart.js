import {createSlice} from '@reduxjs/toolkit';
import {addProductToCart, deleteProduct, updateQuantity} from '../thunk/cart';
import { getMe } from '../thunk/auth';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.cart = action.payload.products
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.cart = action.payload.cart.products
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const {} = cartSlice.actions;
