import axios from 'axios';
import { toast } from 'react-toastify';
import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from 'redux/items';

const BASE_URL = 'https://62fdfbf5a85c52ee482d0646.mockapi.io/api/v1/contacts';

export const fetchItems = () => async dispatch => {
  dispatch(fetchItemsRequest());

  const response = await axios(BASE_URL);

  try {
    const items = await response.data;
    dispatch(fetchItemsSuccess(items));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

export const addItem = item => async dispatch => {
  const response = await axios.post(BASE_URL, item);

  try {
    await response.data;
    dispatch(fetchItems());
    toast.success(`"${item.name}" added to your contacts!`);
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};

export const removeItem = itemId => async dispatch => {
  const response = await axios.delete(`${BASE_URL}/${itemId}`);

  try {
    const item = await response.data;
    dispatch(fetchItems());
    toast.info(`"${item.name}" deleted from your contacts!`);
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Sorry! Something went wrong.');
  }
};
