import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
    const response = await fetch('https://rest-country-api.p.rapidapi.com/', options);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  countries: [],
  isLoading: false,
  isOpen: false,
  selectedCountryId: null,
};

const countriesSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    OpenModal: (state, action) => {
      state.isOpen = true;
      state.selectedCountryId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedCountryId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        const countriesWithIds = action.payload.map((country, index) => ({
          ...country, id: index + 1,
        }));
        state.countries = countriesWithIds;
        state.isLoading = false;
      })
      .addCase(getCountries.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { OpenModal, closeModal } = countriesSlice.actions;

export default countriesSlice.reducer;
