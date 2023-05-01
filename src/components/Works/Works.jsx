import React from 'react';

import styles from '../../styles/Works.module.css';

import Card from '../Card/Card';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.works__container}>
        <h1 className={styles.works__title}>Web Applications</h1>

        <div className={styles.border}></div>

        <div className={styles.works__box}>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}

export default Works