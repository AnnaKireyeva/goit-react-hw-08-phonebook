import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}
