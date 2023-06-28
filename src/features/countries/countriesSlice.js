import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://rest-country-api.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'ad1386ee90mshc8a9b98d378bceap15ecd5jsnaf4f69952962',
    'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com',
  },
};

export const getCountries = createAsyncThunk('country/getCountries', async () => {
  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  countries: [],
  isLoading: false,
};

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        // console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(getCountries.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default countriesSlice.reducer;
