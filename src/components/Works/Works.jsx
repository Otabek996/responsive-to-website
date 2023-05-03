import React from 'react';

import styles from '../../styles/Works.module.css';

import Card from '../Card/Card';

import INSTABOTS from '../../images/instabots-website.png';
import HOMERUN from '../../images/homerun-website.png';
import LOGOIPSUM from '../../images/logoipsum-website.png';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.works__container}>
        <h1 className={styles.works__title}>Web Applications</h1>

        <div className={styles.border}></div>

        <div className={styles.works__content}>
          <Card
            img={HOMERUN}
            title="Homerun"
            description="Responsive website using HTML CSS Sass & Bootstrap."
            linkToWebsite="https://incomparable-khapse-0462f1.netlify.app/"
            linkToCode="https://github.com/Otabek996/homerun_website"
          />

          <Card
            img={INSTABOTS}
            title="Instabots"
            description="Responsive website using HTML CSS & JavaScript."
            linkToWebsite="https://ephemeral-cucurucho-18cc79.netlify.app/"
            linkToCode="https://github.com/Otabek996/responsive-instabots-website"
          />

          <Card
            img={LOGOIPSUM}
            title="Logoipsun"
            description="Website using HTML & CSS."
            linkToWebsite=""
            linkToCode="https://github.com/Otabek996/logoIpsum-Web"
          />
        </div>
      </div>
    </section>
  )
};

export default Works;