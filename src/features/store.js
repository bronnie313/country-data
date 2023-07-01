import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;
