import { createSlice} from '@reduxjs/toolkit';
import { getAllOrders,getSingleOrder, createOrder, editOrder,deleteOrder,editPartOfOrder} from './ordersAction'; //action

//initial state of reducer
const initialState = {
  success: false,
  loading: false,
  error: false,
  data:[],

  getSingleSuccess: false,
  getSingleLoading: false,
  getSingleError: false,
  getSingleData:[],

  createSuccess: false,
  createLoading: false,
  createError: false,
  createdData: [],

  editSuccess: false,
  editLoading: false,
  editError: false,

  deleteSuccess: false,
  deleteLoading: false,
  deleteError: false,

  editPartOfSuccess: false,
  editPartOfLoading: false,
  editPartOfError: false,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: {
    // get all Order
    [getAllOrders.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
      state.success = true;
    },
    [getAllOrders.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllOrders.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
    // get single Order
    [getSingleOrder.fulfilled.type]: (state, action) => {
      state.getSingleLoading = false;
      state.getSingleError = false;
      state.getSingleData = action.payload;
      state.getSingleSuccess = true;
    },
    [getSingleOrder.pending.type]: (state) => {
      state.getSingleLoading = true;
    },
    [getSingleOrder.rejected.type]: (state) => {
      state.getSingleLoading = false;
      state.getSingleError = true;
      console.log('Не удалось получить этот каскадные инструменты!');
    },
    // create Order
    [createOrder.fulfilled.type]: (state, action) => {
      state.createLoading = false;
      state.createError = false;
      state.createSuccess = true;
      state.createdData = action.payload;
      state.deleteSuccess = false;
      console.log('Каскадные инструменты созданные успешно!');
    },
    [createOrder.pending.type]: (state) => {
      state.createLoading = true;
    },
    [createOrder.rejected.type]: (state, action) => {
      state.createLoading = false;
      state.createError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    // edit Order
    [editOrder.fulfilled.type]: (state) => {
      state.editLoading = false;
      state.editError = false;
      state.editSuccess = true;
      console.log('Каскадные инструменты успешно изменены!');
    },
    [editOrder.pending.type]: (state) => {
      state.editLoading = true;
    },
    [editOrder.rejected.type]: (state, action) => {
      state.editLoading = false;
      state.editError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    // delete Order
    [deleteOrder.fulfilled.type]: (state) => {
      state.deleteLoading = false;
      state.deleteError = false;
      state.deleteSuccess = true;
      console.log("Каскадные инструменты успешно удалены!")
    },
    [deleteOrder.pending.type]: (state) => {
      state.deleteLoading = true;
    },
    [deleteOrder.rejected.type]: (state) => {
      state.deleteLoading = false;
      state.deleteError = true;
      console.log('Не удалось удалить каскадные инструменты!');
    },
    // edit part of Order
    [editPartOfOrder.fulfilled.type]: (state) => {
      state.editPartOfLoading = false;
      state.editPartOfError = false;
      state.editPartOfSuccess = true;
    },
    [editPartOfOrder.pending.type]: (state) => {
      state.editPartOfLoading = true;
    },
    [editPartOfOrder.rejected.type]: (state, action) => {
      state.editPartOfLoading = false;
      state.editPartOfError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    
  }
});

export default orderSlice.reducer;