import { createSlice} from '@reduxjs/toolkit';
import { getAllCategories,getSingleCategory, createCategory, editCategory,deleteCategory,editPartOfCategory} from './categoryAction'; //action

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

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    // get all Category
    [getAllCategories.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
      state.success = true;
    },
    [getAllCategories.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllCategories.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
    // get single Category
    [getSingleCategory.fulfilled.type]: (state, action) => {
      state.getSingleLoading = false;
      state.getSingleError = false;
      state.getSingleData = action.payload;
      state.getSingleSuccess = true;
    },
    [getSingleCategory.pending.type]: (state) => {
      state.getSingleLoading = true;
    },
    [getSingleCategory.rejected.type]: (state) => {
      state.getSingleLoading = false;
      state.getSingleError = true;
      console.log('Не удалось получить этот каскадные инструменты!');
    },
    // create Category
    [createCategory.fulfilled.type]: (state, action) => {
      state.createLoading = false;
      state.createError = false;
      state.createSuccess = true;
      state.createdData = action.payload;
      state.deleteSuccess = false;
      console.log('Каскадные инструменты созданные успешно!');
    },
    [createCategory.pending.type]: (state) => {
      state.createLoading = true;
    },
    [createCategory.rejected.type]: (state, action) => {
      state.createLoading = false;
      state.createError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    // edit Category
    [editCategory.fulfilled.type]: (state) => {
      state.editLoading = false;
      state.editError = false;
      state.editSuccess = true;
      console.log('Каскадные инструменты успешно изменены!');
    },
    [editCategory.pending.type]: (state) => {
      state.editLoading = true;
    },
    [editCategory.rejected.type]: (state, action) => {
      state.editLoading = false;
      state.editError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    // delete Category
    [deleteCategory.fulfilled.type]: (state) => {
      state.deleteLoading = false;
      state.deleteError = false;
      state.deleteSuccess = true;
      console.log("Каскадные инструменты успешно удалены!")
    },
    [deleteCategory.pending.type]: (state) => {
      state.deleteLoading = true;
    },
    [deleteCategory.rejected.type]: (state) => {
      state.deleteLoading = false;
      state.deleteError = true;
      console.log('Не удалось удалить каскадные инструменты!');
    },
    // edit part of Category
    [editPartOfCategory.fulfilled.type]: (state) => {
      state.editPartOfLoading = false;
      state.editPartOfError = false;
      state.editPartOfSuccess = true;
    },
    [editPartOfCategory.pending.type]: (state) => {
      state.editPartOfLoading = true;
    },
    [editPartOfCategory.rejected.type]: (state, action) => {
      state.editPartOfLoading = false;
      state.editPartOfError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    
  }
});

export default categorySlice.reducer;