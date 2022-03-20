import React, { useEffect, useState } from 'react';
import styles from './Main.module.css'

const Main = () => {
  const [count, setCount] = useState(window.store.count)

  useEffect(() => {
    window.store.subscribe(() => {
      setCount(window.store.count)
    })
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>This is Main component</h1>
        <div className={styles.count}>Global count: {count}</div>
        <button className={styles.btn} onClick={window.store.increment}>Increment count</button>
      </div>
    </div>
  );
};

export default Main;