import { University } from '@/utils/consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  universities: University[];
  currentPage: number;
}

const initialState: SearchState = {
  searchTerm: '',
  universities: [],
  currentPage: 1,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setUniversities(state, action: PayloadAction<University[]>) {
      state.universities = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchTerm, setUniversities, setCurrentPage } =
  searchSlice.actions;
export default searchSlice.reducer;
