import { configureStore } from '@reduxjs/toolkit';
import course from '../features/courses/coursesSlice';
import order  from "../features/orders/ordersSlice"
import getMe from "../features/getMe/authSlice"
import logger from "redux-logger"
// Store config

export const rootReducer = {
  course:course,
  order:order,
  getMe:getMe 
};
export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


