export const getContacts = state => state.contactsReducer.items;
// export const getList = state => state.contactsReducer.items;
export const getFilter = state => state.contactsReducer.filter;

export const getList = state => {
  return getContacts(state).filter(contact =>
    contact.name.toLowerCase().includes(getFilter(state))
  );
};
// export const getList = state => {
//   state.contactsReducer.items.filter(contact =>
//     contact.name.toLowerCase().includes(state.contactsReducer.filter)
//   );
// };
