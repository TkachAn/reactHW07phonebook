import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const filterContact = createAction('contacts/filterContact');

export { addContact, deleteContact, filterContact };
