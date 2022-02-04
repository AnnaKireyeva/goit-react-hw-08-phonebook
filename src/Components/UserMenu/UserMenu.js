import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './personalizationprofile.jpg';
import styles from './UserMenu.module.css';

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="{name}" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
