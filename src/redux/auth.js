import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchUserRequest: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    fetchUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    fetchUserFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    fetchUserLogOutSuccess: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    fetchCurrentUserSuccess: (state, action) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserLogOutSuccess,
  fetchCurrentUserSuccess,
} = authSlice.actions;

export default authSlice.reducer;
