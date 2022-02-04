import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './personalizationprofile.jpg';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="{name}" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
