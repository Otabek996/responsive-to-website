import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <footer className={styles.footer__container}>
        <div className={styles.footer__title}>
          Stay Connected
        </div>

        <div className={styles.footer__location}>
          Tashkent, Uzbekistan
        </div>

        <div className={styles.footer__social}>
          <div className={styles.network__box}>
            <a rel="noreferrer" href="https://www.instagram.com/0tabek.t/" target='_blank'>
              <i class="ri-instagram-line"></i>
            </a>
          </div>

          <div className={styles.network__box}>
            <a rel="noreferrer" href="https://t.me/Otabek996/" target='_blank'>
              <i class="ri-telegram-fill"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
};

export default Footer;