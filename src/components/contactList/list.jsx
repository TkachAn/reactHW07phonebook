import { useSelector } from 'react-redux'; // useDispatch,
import { getContacts } from 'redux/selectors';
// import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operAxios';
// import { fetchContacts } from 'redux/operAxios';
// import { deleteContact } from 'redux/operAxios';
// import { deleteContact } from '../../redux/actions.js';
// import { deleteContact } from '../../redux/contactSlice';
// import { getList } from '../../redux/selectors';
import css from './list.module.css';

export function ContactList() {
  // const dispatch = useDispatch();
  const contacts = [{}, {}]; //useSelector(fetchContacts);
  const { items } = useSelector(fetchContacts);
  console.log('List-getContacts', useSelector(getContacts));
  console.log('List-items', { items });
  // const contacts = fetchContacts();
  // const contacts = useSelector(fetchContacts());
  // const contacts = useSelector(getContacts);
  // const contacts = useSelector(state => state.contacts);
  // const contacts = useSelector(getContacts.item);
  // console.log('getList', getList);
  console.log('List--contacts', contacts); //contacts
  // const delContacts = data => {
  //   // console.log(deleteContact(data));
  //   // dispatch(deleteContact(data));
  // };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <div className={css.info}>
              {name}: {phone}
              <button
                className={css.btn}
                type="button"
                // onClick={() => delContacts(id)}
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
/* <ContactItem user={name} tel={number} delId={id} /> */
