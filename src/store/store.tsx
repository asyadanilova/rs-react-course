import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from '../hooks/countriesSlice';
import formDataReducer from '../hooks/formSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    formData: formDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;