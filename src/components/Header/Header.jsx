import { array, bool, number } from 'prop-types';
import styles from './Header.module.css';

export function Header(params) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="http://">Lorem ipsum</a>
      <input className={styles.search} type="text" placeholder="Search" />
    </header>
  );
}

Header.propTypes = {
  optionalArray: array.isRequired,
  optionalBool: bool.isRequired,
  optionalNumber: number.isRequired,
};
