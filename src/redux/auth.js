import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
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
      state.isLoggedIn = false;
    },
    fetchUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isSuccess = true;
    },
    fetchUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isSuccess = false;
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } =
  authSlice.actions;

export default authSlice.reducer;
