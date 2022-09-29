import { useDispatch, useSelector } from 'react-redux';
// import { MdClose } from 'react-icons/md';
import { deleteContact } from '../../redux/actions.js';
// import { deleteContact } from '../../redux/contactSlice';
import { getList } from '../../redux/selectors';
import css from './list.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getList);
  const delContacts = data => {
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
              X{/* <MdClose size={24} /> */}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
/* <ContactItem user={name} tel={number} delId={id} /> */
