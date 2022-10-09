import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
// import { contactsReducer } from './contactSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: '',
  },
});
