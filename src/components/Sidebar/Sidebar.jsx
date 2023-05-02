import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';

import { ROUTES } from "../../utils/routes";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__logo}>
          <Link className={styles.logo_img} to={ROUTES.HOME}>
            <span className={styles.logo_letter_first}>T</span>
            <span className={styles.logo_letter_second}>O</span>
          </Link>
        </div>

        <div className={styles.social__networks}>
          <div className={styles.network__box}>
            <a rel="noreferrer" href="https://github.com/Otabek996" target='_blank'>
              <i class="ri-github-fill"></i>
            </a>
          </div>

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
      </div>
    </section>
  )
};

export default Sidebar;