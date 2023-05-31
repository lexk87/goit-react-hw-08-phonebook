import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
    registerUser,
    logInUser,
    logOutUser,
    refreshUser,
} from './authOperations';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logInUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOutUser.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })

            .addCase(registerUser.pending, (state, action) => {})
            .addCase(logInUser.pending, (state, action) => {})
            .addCase(logOutUser.pending, (state, action) => {})
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })

            .addCase(registerUser.rejected, (state, action) => {})
            .addCase(logInUser.rejected, (state, action) => {})
            .addCase(logOutUser.rejected, (state, action) => {})
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
            }),
});

export const authReducer = authSlice.reducer;
