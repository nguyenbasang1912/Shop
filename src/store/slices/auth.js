import {createSlice} from '@reduxjs/toolkit';
import {login} from '../thunk/auth';

const initialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
  error: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.tokens.accessToken;
        state.refreshToken = action.payload.data.tokens.refreshToken;
        state.loading = false;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
