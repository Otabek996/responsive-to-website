import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Header.module.css';

import { ROUTES } from "../../utils/routes";
import { useTheme } from "../../utils/use-theme";

import CLOSE from "../../images/close-line.svg";
import OPEN from "../../images/menu-line.svg";

const Header = () => {
  // Theme Change
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Theme Icon Change
  let themeIcon = "sun";
  if (theme === "light") {
    themeIcon = "moon";
  } else themeIcon = "sun";

  // Show Menu

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.nav__left}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="mailto:otabek996996@gmail.com">
                  <i className="ri-mail-fill"></i>
                  <span className={styles.nav__email}>otabek996996@gmail.com</span>
                  <span className={styles.nav__email_text}>Email</span>
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
                    <i className={`ri-${themeIcon}-fill`} id="theme-icon"></i>
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

      <button 
        className={styles.nav__toggle} 
        id='nav__toggle'
        type='button'
      >
        <span>
          <img className={styles.nav_close} src={CLOSE} alt="Close menu" />
        </span>
        <span>
          <img src={OPEN} alt="Open menu" />
        </span>
      </button>
    </header>
  )
};

export default Header;