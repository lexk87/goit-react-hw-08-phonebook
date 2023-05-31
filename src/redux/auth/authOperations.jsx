import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, thunkAPI) => {
        try {
            const response = await axios.post('users/signup', user);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logInUser = createAsyncThunk(
    'auth/logInUser',
    async (user, thunkAPI) => {
        try {
            const response = await axios.post('users/login', user);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logOutUser = createAsyncThunk(
    'auth/logOutUser',
    async (_, thunkAPI) => {
        try {
            await axios.post('users/logout');
            clearAuthHeader();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const persistedToken = thunkAPI.getState().auth.token;

        if (!persistedToken) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('users/current');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
