import { Filter } from './filter/filter';
import { ContactForm } from './contactForm/form';
import { ContactList } from './contactList/list';
import { useSelector } from 'react-redux';

import css from './App.module.css';
export const App = () => {
  const contacts = useSelector(state => state.contactsReducer);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.items.length > 1 && <Filter />}
      {/* <Filter /> */}
      {/* <ContactList /> */}
      {contacts.items.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
};
