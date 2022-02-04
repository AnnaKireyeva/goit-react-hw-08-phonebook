import React from 'react';
// import { FaRegAddressBook } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import styles from './css/HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Your Phone Book</h1>
    <span className={styles.span}>
      Welcome to service! To use the service Log in or Sign up please!
    </span>

    <FcContacts size={300} className={styles.icon} />
  </div>
);

export default HomeView;
