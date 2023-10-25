// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './RegisterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
