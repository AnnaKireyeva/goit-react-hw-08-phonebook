import styles from './css/ContactsView.module.css';
import { Loader } from '../Components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import AddContactForm from '../Components/AddContactForm/AddContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactsList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts, getLoading } from '../redux/phonebook-selectors';

export default function App() {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);
  return (
    <div className={styles.ContactsView}>
      <h1 className={styles.Title}>Phone Book</h1>
      <AddContactForm />

      <h2 className={styles.Title}>Contacts</h2>

      {loading && <Loader />}
      {contacts.length !== 0 ? (
        <Filter />
      ) : (
        <h3 className={styles.EmptyList}>Your contacts list is empty</h3>
      )}

      <ContactList />
      <ToastContainer autoClose="3000" position="top-right" theme="colored" />
    </div>
  );
}
