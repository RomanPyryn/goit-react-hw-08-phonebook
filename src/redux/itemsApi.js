import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from 'redux/items';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//  Get user contacts
export const fetchItems = () => async dispatch => {
  dispatch(fetchItemsRequest());

  const response = await axios('/contacts');

  try {
    const items = await response.data;
    dispatch(fetchItemsSuccess(items));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

//  Add new contact
export const addItem = item => async dispatch => {
  const response = await axios.post('/contacts', item);

  try {
    await response.data;
    dispatch(fetchItems());
    toast.success(`"${item.name}" added to your contacts!`);
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

//  Delete contact
export const removeItem = itemId => async dispatch => {
  const response = await axios.delete(`/contacts/${itemId}`);

  try {
    const item = await response.data;
    dispatch(fetchItems());
    toast.info(`"${item.name}" deleted from your contacts!`);
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

//  Edit contact
export const editItem = (item, itemId) => async dispatch => {
  const response = await axios.patch(`/contacts/${itemId}`, item);

  try {
    const item = await response.data;
    dispatch(fetchItems());
    toast.info(`"${item.name}" edited!`);
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};
