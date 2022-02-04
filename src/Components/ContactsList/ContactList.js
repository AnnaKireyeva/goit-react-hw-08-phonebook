import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';
import phonebookOperations from '../../redux/phonebook-operations';
import { changeFilter } from '../../redux/phonebook-actions';
import { filterContacts } from '../../redux/phonebook-selectors';

const ContactList = () => {
  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(changeFilter(''));
    }
  }, [dispatch, contacts.length]);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          // onDeleteContact={() => onDeleteContact(id)}
          onDeleteContact={() => {
            onDeleteContact(id);
            toast.success(`Contact '${name}' deleted`);
          }}
        ></ContactsItem>
      ))}
    </ul>
  );
};

export default ContactList;
