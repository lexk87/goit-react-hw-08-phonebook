import { createSlice } from '@reduxjs/toolkit';
import {
    registerUser,
    logInUser,
    logOutUser,
    refreshUser,
} from './authOperations';
import { toast } from 'react-toastify';

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

            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })

            .addCase(registerUser.rejected, () => {
                toast.error(
                    'Oops, something went wrong! But we are pretty sure that a user with such an email already exists.',
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    }
                );
            })
            .addCase(logInUser.rejected, () => {
                toast.error(
                    'Oops, something went wrong! But we are pretty sure that you entered the wrong email or password.',
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    }
                );
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            }),
});

export const authReducer = authSlice.reducer;
