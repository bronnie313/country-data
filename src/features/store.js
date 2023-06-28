import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import countryReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    country: countryReducer,
  },
});

export default store;
