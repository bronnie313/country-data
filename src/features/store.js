import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
