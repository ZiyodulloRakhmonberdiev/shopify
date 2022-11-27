import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../Constants/api';
import { END_POINT_ORDERS} from "../../../Constants/api"
// get all order
export const getAllOrders = createAsyncThunk( 'getAllOrders', async (query, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${END_POINT_ORDERS}?q=${query}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get all Courses Error!')
    }
  }
); //not using

// create order
export const createOrder = createAsyncThunk(
  'create-order',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/${END_POINT_ORDERS}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Create Order Error!')
    }
  }
); //200ok

// get single Order
export const getSingleOrder = createAsyncThunk(
  'get-single-order',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${END_POINT_ORDERS}?q=${query}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data;
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get single Order error!')
    }
  }
); //200ok

// edit Order
export const editOrder = createAsyncThunk(
  'edit-order',
  async (formData, thunkAPI) => {
    console.log(formData);
    try {
      const response = await axios.put(`${BASE_URL}/${END_POINT_ORDERS}/${formData.id}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit Order!')
    }
  }
); //not using

// delete Order
export const deleteOrder = createAsyncThunk(
  'delete-order',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${END_POINT_ORDERS}/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Delete Order Error!')
    }
  }
); //200ok


// edit part of Order
export const editPartOfOrder = createAsyncThunk(
  'edit-part-of-order',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/${END_POINT_ORDERS}/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit part of Order Error!')
    }
  }
); //not using