import { createSlice} from '@reduxjs/toolkit';
import { authorization} from './authAction'; //action
import { useNavigate } from 'react-router-dom';

//initial state of reducer
const initialState = {
  success: false,
  loading: false,
  error: false,
  data:null,

  authSuccess: false,
  authLoading: false,
  authError: false,
  authdata:null

};


const authSlice = createSlice({

  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // post auth
    [authorization.fulfilled.type]: (state, action) => {
      state.authLoading = false;
      state.authError = false;
      state.authSuccess = true;
      state.data = action.payload;
      const token =  action.payload;
      localStorage.setItem("token", token)
     
// const navigate = useNavigate();
 // navigate("/");
      state.deleteSuccess = false;
      console.log('posted successfully !');
    },
    [authorization.pending.type]: (state) => {
      state.authLoading = true;
    },
    [authorization.rejected.type]: (state, action) => {
      state.authLoading = false;
      state.authError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Something went wrong Error!');
    },
  }
});

export default authSlice.reducer;