import {createSlice, current} from '@reduxjs/toolkit';
import {
  addProductIntoFavorites,
  addProductToCart,
  deleteProduct,
  deleteProductInFavorite,
  fetchProducts,
  fetchSaleOffProducts,
  updateQuantity,
} from '../thunk/cart';

const initialState = {
  favorites: [],
  productInfo: {
    products: [],
    page: {
      currentPage: 0,
      maxPages: 0,
    },
  },
  cart: [],
  loading: false,
};

const favoriteSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProduct: (state, action) => {
      state.productInfo.products = [];
      state.page = {
        currentPage: 0,
        maxPages: 0,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addProductIntoFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      })
      .addCase(deleteProductInFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.cart = action.payload.products;
      })

      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productInfo.products.push(...action.payload.products);
        state.productInfo.page = action.payload.page;
        state.loading = false;
      })
      
      .addCase(fetchSaleOffProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSaleOffProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productInfo.products.push(...action.payload.products);
        state.productInfo.page = action.payload.page;
      });
  },
});

export const cartReducer = favoriteSlice.reducer;
export const {resetProduct} = favoriteSlice.actions;
