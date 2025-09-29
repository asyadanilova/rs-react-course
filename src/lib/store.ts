import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import selectedItemsReducer from '../lib/selectedItemsSlice';
import searchReducer from '../lib/searchSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
      search: searchReducer,
    },
  });
};

export const store = makeStore();

setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
