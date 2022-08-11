import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeItem: (state, { payload: id }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
