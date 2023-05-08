import React from 'react';

import styles from '../../styles/Resume.module.css';

import { techs, othersTechs } from '../../utils/techData';

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
              {techs.map((tech) => (
                <div className={styles.tech} key={tech.id}>
                  <span title={tech.text}>
                    <img className={styles.tech__img} src={tech.img} alt={tech.text}  decoding='async' />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tech__box}>
            <h2 className={styles.tech__box_title}>Others techs</h2>

            <div className={styles.techs}>
              {othersTechs.map((otherTech) => (
                <div className={styles.tech} key={otherTech.id}>
                  <span title={otherTech.text}>
                    <img className={styles.tech__img} src={otherTech.img} alt={otherTech.text} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.border}></div>

        <div className={styles.resume__section}>
          <button className={styles.btn__cv} type='button'>
            <a href="https://tashkent.hh.uz/applicant/resumes/view?resume=307c12b9ff0ba58d670039ed1f725553324846" target='_blank' rel="noreferrer">
              <span>CV</span>
              <span className={styles.btn__cv_icon}><i className="ri-arrow-right-up-line"></i></span>
            </a>
          </button>
        </div>
      </div>
    </section>
  )
};

export default Resume;