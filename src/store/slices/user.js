import {createSlice} from '@reduxjs/toolkit';
import {getMe} from '../thunk/auth';
import { createNewAddress, deleteAddress, updateAddress } from '../thunk/user';

const initialState = {
  userInfo: {
    userId: null,
    name: '',
    email: '',
    gender: '',
    phone: '',
    avatar: '',
    address: [],
    defaultAddress: {}
  },
  status: {
    selectedAddress: {},
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      const address = state.userInfo.address.find(addr => addr._id === action.payload)
      console.log(address)
      state.status.selectedAddress = address;
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
      state.userInfo.defaultAddress = data?.default_address;
      state.status.selectedAddress = data?.default_address;
    }).addCase(createNewAddress.fulfilled, (state, action) => {
      state.userInfo.address = action.payload;
    }).addCase(updateAddress.fulfilled, (state, action) => {
      state.userInfo.address = action.payload
    }).addCase(deleteAddress.fulfilled, (state, action) => {
      state.userInfo.address = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
export const {selectAddress} = userSlice.actions
