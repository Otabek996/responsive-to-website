import React from 'react';

import styles from '../../styles/Home.module.css';

import AVATAR from '../../images/img01.png';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__data}>
          <h1 className={styles.home__title}>
            <span className={styles.letter}>T</span>
            <span className={styles.letter}>u</span>
            <span className={styles.letter}>y</span>
            <span className={styles.letter}>c</span>
            <span className={styles.letter}>h</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>v</span>
            <br />
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>t</span>
            <span className={styles.letter}>a</span>
            <span className={styles.letter}>b</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>k</span>
          </h1>

          <p className={styles.home__subtitle}>
            Developer
          </p>

          <p className={styles.home__description}>
            <span><img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt='Wave'/></span>
            <span>Hello, I am a front-end <br/> Developer 🧑‍💻 from Tashkent, <br/> Uzbekistan.</span>
          </p>
        </div>

        <div className={styles.home__img}>
          <img src={AVATAR} alt="Hello" />
        </div>
      </div>
    </section>
  )
};

export default Home;