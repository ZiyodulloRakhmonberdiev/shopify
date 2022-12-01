import { createSlice} from '@reduxjs/toolkit';
import { authorization} from './authAction'; //action
import { useNavigate } from 'react-router-dom';

//initial state of reducer
const initialState = {
  success: false,
  loading: false,
  error: false,
  data:[],

  authSuccess: false,
  authLoading: false,
  authError: false,
  authdata:[],

  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // get all auth
    [authorization.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
      state.success = true; 
      const navigate = useNavigate();
      const token =  action.payload;
      localStorage.setItem("token", token)
      navigate("/");
    },
   
    [authorization.pending.type]: (state) => {
      state.loading = true;
    },
    [authorization.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
 
  }
});

export default authSlice.reducer;