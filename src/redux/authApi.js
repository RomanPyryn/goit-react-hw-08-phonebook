import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from 'redux/auth';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//  Get info about user
export const getUser = () => async dispatch => {
  dispatch(fetchUserRequest());

  const response = await axios('/users/current');

  try {
    const user = await response.data;
    dispatch(fetchUserSuccess(user));
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
    dispatch(fetchUserSuccess(user));
    // dispatch(getUser());
    toast.success(`Welcome, "${user.user.name}"! You have successfully registered.`);
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
    dispatch(fetchUserSuccess(user));
    // dispatch(getUser());
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
    const user = await response.data;
    toast.success(`See you soon, "${user.name}"!`);
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};
