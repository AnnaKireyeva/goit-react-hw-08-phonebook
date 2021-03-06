import LoaderSpinner from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.spinner}>
      <LoaderSpinner
        type="Audio"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={5000}
      />
    </div>
  );
};
