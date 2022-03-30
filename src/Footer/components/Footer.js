import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>This is app footer</div>

      <div className={styles.decrement}>Here you can decrement global count
        <button className={styles.btn} onClick={window.store.decrement}>Decrement count</button>
        <button className={styles.btn} onClick={() => window.store.fetchUsers(window.store.count)}>Fetch Users</button>
      </div>
    </footer>
  );
};

export default Footer;