import { array, bool, number } from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Main.module.css';

export function Main(params) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ul className={styles.userList}>
          <li className={styles.userCard}>
            <div className={styles.userInfo}>
              <p className={styles.userInfo__name}>Name</p>
              <p className={styles.userInfo__email}>Email</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
            </div>
            <NavLink
              to="/user-1"
              className={styles.userButton}
              activeClassName={styles.userButton_active}
              href="http://"
            >
              Lorem ipsum
            </NavLink>
          </li>
          <li className={styles.userCard}>
            <div className={styles.userInfo}>
              <p className={styles.userInfo__name}>Name</p>
              <p className={styles.userInfo__email}>Email</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
            </div>
            <NavLink
              to="/user-2"
              className={styles.userButton}
              activeClassName={styles.userButton_active}
              href="http://"
            >
              Lorem ipsum
            </NavLink>
          </li>
          <li className={styles.userCard}>
            <div className={styles.userInfo}>
              <p className={styles.userInfo__name}>Name</p>
              <p className={styles.userInfo__email}>Email</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
            </div>
            <NavLink
              to="/user-3"
              className={styles.userButton}
              activeClassName={styles.userButton_active}
              href="http://"
            >
              Lorem ipsum
            </NavLink>
          </li>
          <li className={styles.userCard}>
            <div className={styles.userInfo}>
              <p className={styles.userInfo__name}>Name</p>
              <p className={styles.userInfo__email}>Email</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
              <p className={styles.userInfo__phoneNumber}>Number</p>
            </div>
            <NavLink
              to="/user-4"
              className={styles.userButton}
              activeClassName={styles.userButton_active}
              href="http://"
            >
              Lorem ipsum
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
}

Main.propTypes = {
  optionalArray: array.isRequired,
  optionalBool: bool.isRequired,
  optionalNumber: number.isRequired,
};
