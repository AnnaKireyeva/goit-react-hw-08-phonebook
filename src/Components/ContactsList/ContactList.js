import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';
import phonebookOperations from '../../redux/phonebook-operations';
import { filterContacts } from '../../redux/phonebook-selectors';

const ContactList = () => {
  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        ></ContactsItem>
      ))}
    </ul>
  );
};

export default ContactList;
