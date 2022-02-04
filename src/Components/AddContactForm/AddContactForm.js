import { useState } from 'react';
import styles from './AddContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import phonebookOperations from '../../redux/phonebook-operations';
import { getContacts } from '../../redux/phonebook-selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.warning(`Name '${name}' is already in contacts`);
      reset();
      return;
    }

    if (contacts.find(contact => contact.number.toLowerCase() === number)) {
      toast.warning(`Number '${number}' is already in contacts`);
      reset();
      return;
    }

    dispatch(phonebookOperations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default AddContactForm;
