import axios from 'axios';
import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFailure,
} from 'redux/items';

const BASE_URL = 'https://62fdfbf5a85c52ee482d0646.mockapi.io/api/v1/contacts';

const getItems = async () => {
  const response = await axios(BASE_URL);
  return response.data;
};

const deleteItem = async itemId => {
  const response = await axios.delete(`${BASE_URL}/${itemId}`);
  return response.data;
};

const postItem = async item => {
  const response = await axios.post(BASE_URL, item);
  return response.data;
};

export const fetchItems = () => async dispatch => {
  dispatch(fetchItemsRequest());

  try {
    const items = await getItems();
    dispatch(fetchItemsSuccess(items));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};

export const addItem = () => async dispatch => {
  try {
    const s = await postItem();
    console.log(s);
    dispatch(fetchItems());
  } catch (error) {
    console.log(error);
    dispatch(fetchItemsFailure(error.message));
  }
};

export const removeItem = itemId => async dispatch => {
  try {
    await deleteItem(itemId);
    dispatch(fetchItems());
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
  }
};
