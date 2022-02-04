import React from 'react';
import styles from './css/HomeView.module.css';
import PhonebookImage from '../img/phonebook-img.jpg';

const HomeView = () => {
  const phoneBookImage = PhonebookImage;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Phone Book</h1>
      <span className={styles.span}>
        Welcome to service! To use the service Log in or Sign up please!
      </span>

      <img
        src={phoneBookImage}
        alt="phonebook"
        width="700"
        className={styles.image}
      />
    </div>
  );
};

export default HomeView;
