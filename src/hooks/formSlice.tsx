import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IForm } from '../utils/types';

interface FormState {
  data: IForm | null;
}

const initialState: FormState = {
  data: null,
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IForm>) => {
      state.data = action.payload;
    },
    clearFormData: (state) => {
      state.data = null;
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;