import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Header.module.css';

import { ROUTES } from "../../utils/routes";

const Header = () => {
  const changeTheme = (e) => {
    console.log(`Hello - ${e.currentTarget.className}`);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__left}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="mailto:otabek996@gmail.com">
                <i className="ri-mail-fill"></i>
                <span>otabek996@gmail.com</span>
              </a>
            </li>

            <li className={styles.nav__item}>
              <button 
                className={styles.theme_toggle}
                id='theme-toggle'
                type='button'
                title='Change theme'
                onClick={changeTheme}
              >
                <span>
                  <i className="ri-sun-fill"></i>
                  {/* <i class="ri-moon-fill"></i> */}
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.nav__right}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to={ROUTES.WORKS}>
                <i className="ri-file-line"></i>
                <span>Works</span>
              </Link>
            </li>

            <li className={styles.nav__item}>
              <Link className={styles.nav__link} to={ROUTES.RESUME}>
                <i className="ri-user-3-fill"></i>
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Header;