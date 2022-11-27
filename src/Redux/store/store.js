import { configureStore } from '@reduxjs/toolkit';
import course from '../features/courses/coursesSlice';
import order  from "../features/orders/ordersSlice"
// Store config
export const store = configureStore({
  reducer: {
    course,
    order
  },
});

