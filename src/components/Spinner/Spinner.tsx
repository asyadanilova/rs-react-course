import { type JSX } from 'react';
import styles from '../../styles/Spinner.module.css';

const Spinner = (): JSX.Element => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinner}></div>
      <p className={styles.spinnerText}>
        Loading Data (this may take a moment)...
      </p>
    </div>
  );
};

export default Spinner;
