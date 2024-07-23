import {createSlice} from '@reduxjs/toolkit';
import {getMe} from '../thunk/auth';

const initialState = {
  userInfo: {
    userId: null,
    name: '',
    email: '',
    gender: '',
    phone: '',
    avatar: '',
    address: [],
  },
  status: {
    selectedAddress: null 
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selecteAddress: (state, action) => {
      state.status.selectedAddress = action.payload.address;
    }
  },
  extraReducers: builder => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      const data = action.payload.user;
      state.userInfo.userId = data._id;
      state.userInfo.name = data.name;
      state.userInfo.email = data.email;
      state.userInfo.gender = data.gender;
      state.userInfo.phone = data.phone;
      state.userInfo.avatar = data.avatar;
      state.userInfo.address = data.address;
    });
  },
});

export const userReducer = userSlice.reducer;
