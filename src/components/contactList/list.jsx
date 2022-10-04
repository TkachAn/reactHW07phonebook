import { useDispatch, useSelector } from 'react-redux';

// import { deleteContact } from '../../redux/actions.js';
import { deleteContact } from '../../redux/contactSlice';
import { getList } from '../../redux/selectors';
import css from './list.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getList);
  console.log('getList', getList);
  console.log('contacts', contacts);
  const delContacts = data => {
    console.log(deleteContact(data));
    dispatch(deleteContact(data));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <div className={css.info}>
            {name}: {number}
            <button
              className={css.btn}
              type="button"
              onClick={() => delContacts(id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
/* <ContactItem user={name} tel={number} delId={id} /> */
