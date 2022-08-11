import { configureStore } from '@reduxjs/toolkit';
import items from './items';
import filter from './filter';


export const store = configureStore({
  reducer: {
    // contacts: {
      items,
      filter,
    // },
  },
});
