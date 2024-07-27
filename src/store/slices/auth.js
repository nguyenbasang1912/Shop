import { createSlice } from '@reduxjs/toolkit';
import { login, logoutUser } from '../thunk/auth';

const initialState = {
  user: {
    email: '',
    name: '',
    avatar: '',
  },
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  status: {
    loading: false,
    error: false,
    success: false,
    isLoggedIn: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutLocal: (state, action) => {
      state.status.isLoggedIn = false;
      state.status.error = false;
      state.status.success = false;
      state.status.loading = false;
      state.user = {
        email: '',
        name: '',
        avatar: '',
      };
      state.tokens = {
        accessToken: '',
        refreshToken: '',
      };
    },
    updateTokens: (state, action) => {
      state.tokens.accessToken = action.payload.accessToken;
      state.tokens.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.tokens.accessToken = action.payload.data.tokens.accessToken;
        state.tokens.refreshToken = action.payload.data.tokens.refreshToken;
        state.user = action.payload.data.user;
        state.status.loading = false;
        state.status.success = true;
        state.status.error = false;
        state.status.isLoggedIn = true;
      })
      .addCase(login.pending, state => {
        state.status.loading = true;
        state.status.success = false;
        state.status.error = false;
        state.status.isLoggedIn = false;
      })
      .addCase(login.rejected, state => {
        state.status.loading = false;
        state.status.error = true;
        state.status.success = false;
        state.status.isLoggedIn = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status.loading = false;
        state.status.error = false;
        state.status.success = false;
        state.status.isLoggedIn = false;
        state.user = {
          email: '',
          name: '',
          avatar: '',
        };
        state.tokens = {
          accessToken: '',
          refreshToken: '',
        };
      });
  },
});

export const authReducer = authSlice.reducer;
export const {logoutLocal, updateTokens} = authSlice.actions;
