import { array, bool, number } from 'prop-types';
import styles from './Footer.module.css';

export function Footer(params) {
  return (
    <footer className={styles.footer}>
      <a className={styles.previous} href="/">
        Previous
      </a>
      <a className={styles.next} href="/">
        Next
      </a>
    </footer>
  );
}

Footer.propTypes = {
  optionalArray: array.isRequired,
  optionalBool: bool.isRequired,
  optionalNumber: number.isRequired,
};
