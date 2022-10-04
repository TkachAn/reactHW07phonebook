// import { filterContact } from '../../redux/actions.js';
import { filterContact } from '../../redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import css from './filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactsReducer.filter);

  const changeFilter = data => {
    dispatch(filterContact(data));
  };
  return (
    <label className={css.label}>
      <input
        className={css.input}
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={e => changeFilter(e.target.value)}
      />
    </label>
  );
}
