import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactSlice';

axios.defaults.baseURL = 'https://633ef5ed0dbc3309f3c20373.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // () => async dispatch => {
  //   try {
  //     dispatch(fetchingInProgress());
  //     const response = await axios.get('/contacts');
  //     dispatch(fetchingSuccess(response.data));
  //   } catch (e) {
  //     dispatch(fetchingError(e.message));
  //   }
  // },() =>
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
