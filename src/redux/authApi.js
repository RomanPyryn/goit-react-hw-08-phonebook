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
  dispatch(fetchUserRequest());

  axios
    .post('/users/signup', user)
    .then(res => {
      token.set(res.data.token);
      dispatch(fetchUserSuccess(res.data));
      toast.success(
        `Welcome, "${res.data.user.name}"! You are successfully registered.`
      );
    })
    .catch(err => {
      dispatch(fetchUserFailure(err.message));
      toast.error('User with this name or email is already registered.');
    });
};

//  Log IN user
export const loginUser = user => dispatch => {
  dispatch(fetchUserRequest());

  axios
    .post('/users/login', user)
    .then(res => {
      token.set(res.data.token);
      dispatch(fetchUserSuccess(res.data));
      toast.success(
        `Hi, "${res.data.user.name}"! You are successfully logged in.`
      );
    })
    .catch(err => {
      dispatch(fetchUserFailure(err.message));
      toast.error('Try to enter correct name and email or register.');
    });
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
