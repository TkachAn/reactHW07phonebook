import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://633ef5ed0dbc3309f3c20373.mockapi.io';//6335c6d265d1e8ef2663035d
axios.defaults.baseURL = 'https://6335c6d265d1e8ef2663035d.mockapi.io';
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${contactId}`);
      console.log('Del-response', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      console.log('Add-response', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // console.log('All-response', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
  //() =>
  // async dispatch => {
  //   try {
  //     dispatch(fetchingInProgress());
  //     const response = await axios.get('/contacts');
  //     dispatch(fetchingSuccess(response.data));
  //   } catch (e) {
  //     dispatch(fetchingError(e.message));
  //   }
  // }
  // //,() =>
);
