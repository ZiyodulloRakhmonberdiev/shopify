import { configureStore } from '@reduxjs/toolkit';
import course from '../features/courses/coursesSlice';
import order  from "../features/orders/ordersSlice"
import getMe from "../features/getMe/authSlice"
// Store config
export const store = configureStore({
  reducer: {
    course,
    order,
    getMe
  },
});

