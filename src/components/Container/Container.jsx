import { node } from 'prop-types';
import styles from './Container.module.css';

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
  children: node,
};
