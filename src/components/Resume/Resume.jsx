import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/Resume.module.css';

import HTML from '../../images/html.png';
import CSS from '../../images/css.png';
import SASS from '../../images/sass.png';
import BOOTSTRAP from '../../images/bootstrap.png';
import JS from '../../images/js.png';
import REACT from '../../images/react.png';
import TYPESCRIPT from '../../images/typescript.png';
import NEXTJS from '../../images/next-js.svg';
import GITHUB from '../../images/github.avif';
import GIT from '../../images/git.png';
import NPM from '../../images/npm.avif';
import NETLIFY from '../../images/netlify.avif';

const Resume = () => {
  return (
    <section className={styles.resume}>
      <div className={styles.resume__container}>
        <h1 className={styles.resume__title}>Tech I Use</h1>

        <div className={styles.border}></div>

        <div className={styles.resume__content}>
          <div className={styles.tech__box}>
            <h2 className={styles.tech__box_title}>The tech I use for building client-side applications</h2>

            <div className={styles.techs}>
              <div className={styles.tech}>
                <span title='html'>
                  <img className={styles.tech__img} src={HTML} alt="html" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='css'>
                  <img className={styles.tech__img} src={CSS} alt="css" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='sass'>
                  <img className={styles.tech__img} src={SASS} alt="sass" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='bootstrap'>
                  <img className={styles.tech__img} src={BOOTSTRAP} alt="bootstrap" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='javascript'>
                  <img className={styles.tech__img} src={JS} alt="javascript" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='react'>
                  <img className={styles.tech__img} src={REACT} alt="react" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='nextjs'>
                  <img className={styles.tech__img} src={NEXTJS} alt="nextjs" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='typescript'>
                  <img className={styles.tech__img} src={TYPESCRIPT} alt="typescript" />
                </span>
              </div>
            </div>
          </div>

          <div className={styles.tech__box}>
            <h2 className={styles.tech__box_title}>Others ... and more!</h2>

            <div className={styles.techs}>
              <div className={styles.tech}>
                <a href="https://github.com/Otabek996" target='_blank' rel="noreferrer">
                  <span title='github'>
                    <img className={styles.tech__img} src={GITHUB} alt="github" />
                  </span>
                </a>
              </div>

              <div className={styles.tech}>
                <span title='git'>
                  <img className={styles.tech__img} src={GIT} alt="git" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='netlify'>
                  <img className={styles.tech__img} src={NETLIFY} alt="netlify" />
                </span>
              </div>

              <div className={styles.tech}>
                <span title='npm'>
                  <img className={styles.tech__img} src={NPM} alt="npm" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Resume