import { createSlice } from "@reduxjs/toolkit";
import { initialCountries } from "../utils/consts";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: initialCountries,
    selectedCountry: "",
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setSelectedCountry } = countriesSlice.actions;
export default countriesSlice.reducer;