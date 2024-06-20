import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    accessToken: null,
    refreshToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export const authReducer = authSlice.reducer
