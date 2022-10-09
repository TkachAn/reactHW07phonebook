// import { Filter } from './filter/filter';
// import { ContactForm } from './contactForm/form';
// import { ContactList } from './contactList/list';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operAxios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};

// import css from './App.module.css';
// export const App = () => {
//   const contacts = []; //useSelector(state => state.contactsReducer);

//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       {contacts.items.length > 1 && <Filter />}
//       {/* {contacts.length > 1 && <Filter />} */}
//       {contacts.items.length > 0 ? (
//         <ContactList />
//       ) : (
//         <p>Your phonebook is empty. Please add contact.</p>
//       )}
//     </div>
//   );
// };

// import { Filter } from './filter/filter';
// import { ContactForm } from './contactForm/form';
// import { ContactList } from './contactList/list';
// import { useSelector } from 'react-redux';

// import css from './App.module.css';
// export const App = () => {
//   const contacts = useSelector(state => state.contactsReducer);

//   console.log('contacts.length', contacts.length);
//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       {Number(contacts.length) > 1 && <Filter />}
//       {contacts.length > 0 ? (
//         <ContactList />
//       ) : (
//         <p>Your phonebook is empty. Please add contact.</p>
//       )}
//     </div>
//   );
// };
