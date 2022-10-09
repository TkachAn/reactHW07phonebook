import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
// import { contactsReducer } from './contactSlice';
console.log('Store-contactsReducer', contactsReducer);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: '',
  },
});
