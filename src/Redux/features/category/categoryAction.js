import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../Constants/api';
import { END_POINT_CATEGORIES} from "../../../Constants/api"
const token = localStorage.getItem("token");

// get all category
export const getAllCategories = createAsyncThunk( 'getAllCategories', async (query, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${END_POINT_CATEGORIES}?q=${query}`, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get all Categories Error!')
    }
  }
); //not using

// create category
export const createCategory = createAsyncThunk(
  'create-category',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/${END_POINT_CATEGORIES}`, formData, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Create category Error!')
    }
  }
); //200ok

// get single Category
export const getSingleCategory = createAsyncThunk(
  'get-single-category',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${END_POINT_CATEGORIES}?q=${query}`, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })
      return response.data;
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get single Category error!')
    }
  }
); //200ok

// edit Category
export const editCategory = createAsyncThunk(
  'edit-category',
  async (formData, thunkAPI) => {
    console.log(formData);
    try {
      const response = await axios.put(`${BASE_URL}/${END_POINT_CATEGORIES}/${formData.id}`, formData, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit Category!')
    }
  }
); //not using

// delete Category
export const deleteCategory = createAsyncThunk(
  'delete-order',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${END_POINT_CATEGORIES}/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Delete Category Error!')
    }
  }
); //200ok


// edit part of Category
export const editPartOfCategory = createAsyncThunk(
  'edit-part-of-category',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/${END_POINT_CATEGORIES}/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit part of Category Error!')
    }
  }
); //not using