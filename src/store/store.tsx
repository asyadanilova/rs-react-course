import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../hooks/countriesSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;