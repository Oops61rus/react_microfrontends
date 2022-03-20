import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'

const Header = () => {
  const [count, setCount] = useState(window.store.count)

  useEffect(() => {
    window.store.subscribe(() => {
      setCount(window.store.count)
    })
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.title}>This is header</div>
      <div>Counter from store: <span className={styles.count}>{count}</span></div>
    </header>
  );
};

export default Header;