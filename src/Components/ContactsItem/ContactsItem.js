import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';
import { IoTrashOutline } from 'react-icons/io5';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';

const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactsItem}>
      <div className={styles.contactWrapper}>
        <BsFillPersonFill size={16} className={styles.icon} />
        <p className={styles.contactName}>{name}:</p>
        <BsFillTelephoneFill size={11} className={styles.icon} />
        <p className={styles.contactNumber}>{number}</p>
      </div>

      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={styles.deleteBtn}
      >
        <IoTrashOutline size={22} className={styles.iconBtn} />
      </button>
    </li>
  );
};
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactsItem;
