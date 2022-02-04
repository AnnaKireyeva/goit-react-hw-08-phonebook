import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          className={styles.filterInput}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
