import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './contactSlice';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    searchValue: searchReducer,
  },
});
