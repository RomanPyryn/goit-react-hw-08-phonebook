import axios from 'axios';
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
  }
};

export const addItem = item => async dispatch => {
  const response = await axios.post(BASE_URL, item);

  try {
    await response.data;
    dispatch(fetchItems());
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};

export const removeItem = itemId => async dispatch => {
  const response = await axios.delete(`${BASE_URL}/${itemId}`);

  try {
    await response.data;
    dispatch(fetchItems());
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};
