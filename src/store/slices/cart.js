import {createSlice} from '@reduxjs/toolkit';
import {addProductToCart, deleteProduct, updateQuantity} from '../thunk/cart';
import {getMe} from '../thunk/auth';
import {createOrder} from '../thunk/order';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.cart = action.payload.cart.products;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        console.log(action.payload)
        const productIds = action.payload.order_info.products.map(product => product._id);
        state.cart = state.cart.filter(product =>
          !productIds.includes(product._id),
        );
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const {} = cartSlice.actions;
