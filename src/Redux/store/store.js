import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger"
import course from '../features/courses/coursesSlice';
import order  from "../features/orders/ordersSlice"
import getMe from "../features/getMe/authSlice"
import category from "../features/category/categorySlice"
// Store config

export const rootReducer = {
  course:course,
  order:order,
  getMe:getMe ,
  category:category
};
export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


