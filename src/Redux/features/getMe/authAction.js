import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../Constants/api';

// get me 
export const authorization = createAsyncThunk(
    'getMe',
    async (formData, thunkAPI) => {
      try {
        const response = await axios.post(`${BASE_URL}/auth`, formData, {
          withCredentials: false,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        })
        if (response?.status === 401) {
            // toast.error("логин или пароль неверный");
          } else {
            // toast.error("что-то пошло не так");
          }
        return response.data; 
      
      } catch (err) {
        return thunkAPI.rejectWithValue('Create Auth Error!')
      }
    }
  ); //200ok