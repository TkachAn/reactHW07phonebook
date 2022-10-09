import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operAxios';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
// console.log('contactsInitialState', contactsInitialState);
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;

      console.log('conSlice-fetchContacts', state.items);
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// import {
//   loadFromStorage,
//   saveInStorage,
// } from '../storageService/storageService';
// const contactsInitialState = loadFromStorage('phonebook');
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       const isNameExist = state.items.find(
//         contact =>
//           contact.name.toLowerCase() === action.payload.name.toLowerCase()
//       );
//       isNameExist
//         ? alert(`${action.payload.name} is already in contacts`)
//         : state.items.push(action.payload);
//       saveInStorage('phonebook', state.items);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//       saveInStorage('phonebook', state.items);
//     },
//     filterContact(state, action) {
//       state.filter = action.payload.toLowerCase();
//     },
//   },
// });
// export const { addContact, deleteContact, filterContact } =
//   contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
