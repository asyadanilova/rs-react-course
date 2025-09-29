import { University } from '@/utils/consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedItemsState {
  items: University[];
}

const initialState: SelectedItemsState = { items: [] };

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem(state, action: PayloadAction<University>) {
      state.items.push(action.payload);
    },
    unselectItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item: University) => item.domains[0] !== action.payload
      );
    },
    unselectAll(state) {
      state.items = [];
    },
  },
});

export const { selectItem, unselectItem, unselectAll } =
  selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
