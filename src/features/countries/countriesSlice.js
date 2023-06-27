import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  isLoading,
};

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default countriesSlice;
