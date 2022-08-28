import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  isLoading: false,
  isSuccess: false,
  error: '',
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchItemsRequest: state => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    fetchItemsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    fetchItemsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure } =
  itemsSlice.actions;

export default itemsSlice.reducer;
