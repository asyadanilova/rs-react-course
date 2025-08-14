import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from './selectedItemsSlice';
import searchReducer from './searchSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { universityApi } from '../services/university';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
    search: searchReducer,
    [universityApi.reducerPath]: universityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(universityApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
