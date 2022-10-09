// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, filterContact } from './actions';

// import {
//   loadFromStorage,
//   saveInStorage,
// } from '../storageService/storageService';

// export const contactsReducer = createReducer(
//   {
//     items: loadFromStorage('phonebook'),

//     isLoading: false,
//     error: null,
//   },
//   {
//     [addContact]: (state, action) => {
//       console.log('state', state);
//       const isNameExist = state.items.find(
//         contact =>
//           contact.name.toLowerCase() === action.payload.name.toLowerCase()
//       );

//       console.log('isNameExist', isNameExist);
//       isNameExist
//         ? alert(`${action.payload.name} is already in contacts`)
//         : state.items.push(action.payload);
//       saveInStorage('phonebook', state.items);
//     },
//     [deleteContact]: (state, action) => {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//       saveInStorage('phonebook', state.items);
//     },
//     // [filterContact]: (state, action) => {
//     //   state.filter = action.payload.toLowerCase(); //.toLowerCase()
//     // },
//   }
// );
// // export {addContact, deleteContact, filterContact} = contactsReducer;
