import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import css from '../../components/ContactList/ContactList.module.css';
import {
  deleteContact,
  getContactsItems,
} from 'components/redux/ContactListSlice';
import { getFilterValue } from 'components/redux/FilterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = useMemo(
    () => () => {
      const normalizedFilter = filterValue.toLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
    [contacts, filterValue]
  );

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contact_list}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={css.contact_item} key={id}>
              <p className={css.contact__text}>{name}</p>
              <p className={css.contact__text}>{number}</p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContact({ id: id }))}
              >
                Видалити
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
