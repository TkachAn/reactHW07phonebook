import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './reducer.js';
import { contactsReducer } from './contactSlice';
export const store = configureStore({
  reducer: {
    contactsReducer,
  },
});
