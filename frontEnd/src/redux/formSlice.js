import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    forms: [],
  },
  reducers: {
    addForm: (state, action) => {
      state.forms.push(action.payload);
    },
    updateForm: (state, action) => {
      const index = state.forms.findIndex((form) => form.id === action.payload.id);
      if (index !== -1) {
        state.forms[index] = action.payload;
      }
    },
    deleteForm: (state, action) => {
      state.forms = state.forms.filter((form) => form.id !== action.payload.id);
    },
  },
});

export const { addForm, updateForm, deleteForm } = formSlice.actions;
export default formSlice.reducer;
