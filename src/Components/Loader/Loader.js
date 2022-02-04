import LoaderSpinner from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.spinner}>
      <LoaderSpinner
        type="Audio"
        color="#00BFFF"
        height={60}
        width={60}
        timeout={5000}
      />
    </div>
  );
};
