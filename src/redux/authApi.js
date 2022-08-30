import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserLogOutSuccess,
  fetchCurrentUserSuccess,
} from 'redux/auth';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//  Get info about user
export const getUser = () => async (dispatch, getState) => {
  const persistedToken = getState().auth.token;

  if (!persistedToken) {
    return getState();
  }

  token.set(persistedToken);

  dispatch(fetchUserRequest());

  const response = await axios('/users/current');

  try {
    const user = await response.data;
    dispatch(fetchCurrentUserSuccess(user));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

//  Add new user
export const addUser = user => async dispatch => {
  const response = await axios.post('/users/signup', user);

  try {
    const user = await response.data;
    token.set(user.token);
    dispatch(fetchUserSuccess(user));
    toast.success(
      `Welcome, "${user.user.name}"! You have successfully registered.`
    );
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

//  Log IN user
export const loginUser = user => async dispatch => {
  const response = await axios.post('/users/login', user);

  try {
    const user = await response.data;
    token.set(user.token);
    dispatch(fetchUserSuccess(user));
    await toast.success(
      `Hi, "${user.user.name}"! You are successfully logged in.`
    );
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

//  Log OUT user
export const logoutUser = () => async dispatch => {
  dispatch(fetchUserRequest());

  const response = await axios.post('/users/logout');

  try {
    await response.data;
    token.unset();
    dispatch(fetchUserLogOutSuccess());
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};
