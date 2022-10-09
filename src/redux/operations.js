// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://633ef5ed0dbc3309f3c20373.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   'phonebook/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'phonebook/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'phonebook/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const {
//         data: { id },
//       } = await axios.delete(`/contacts/${contactId}`);
//       return id;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );
