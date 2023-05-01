import React from 'react';

import styles from '../../styles/Works.module.css';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.works__container}>
        <h1 className={styles.works__title}>Web Applications</h1>

        <div className={styles.border}></div>

        <div className={styles.works__box}></div>
      </div>
    </section>
  )
}

export default Works