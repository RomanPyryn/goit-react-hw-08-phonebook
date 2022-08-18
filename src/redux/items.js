import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchItemsRequest: state => {
      state.isLoading = true;
    },
    fetchItemsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    fetchItemsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
  addItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;
