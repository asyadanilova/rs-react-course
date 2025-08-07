export type RootState = ReturnType<typeof store.getState>;
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from './selectedItemsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { universityApi } from '../services/university';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
    [universityApi.reducerPath]: universityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(universityApi.middleware),
});

setupListeners(store.dispatch);
