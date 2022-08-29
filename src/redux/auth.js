import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogedIn: false,
  isLoading: false,
  isSuccess: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUserRequest: state => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    fetchUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    fetchUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure} = authSlice.actions;

export default authSlice.reducer;
