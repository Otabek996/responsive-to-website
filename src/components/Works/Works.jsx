import React from 'react';

import styles from '../../styles/Works.module.css';

import Card from '../Card/Card';

import INSTABOTS from '../../images/instabots-website.png';
import HOMERUN from '../../images/homerun-website.png';
import LOGOIPSUM from '../../images/logoipsum-website.png';
import TO from '../../images/to-website.png';

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
            linkToCode="https://github.com/Otabek996/responsive-homerun-website"
          />

          <Card
            img={INSTABOTS}
            title="Instabots"
            description="Responsive website using HTML CSS & JavaScript."
            linkToWebsite="https://ephemeral-cucurucho-18cc79.netlify.app/"
            linkToCode="https://github.com/Otabek996/responsive-instabots-website"
          />

          <Card
            img={TO}
            title="TO"
            description="👨‍💻 My personal portfolio website using React, CSS & HTML."
            linkToWebsite="https://otabek996.github.io/responsive-to-website/"
            linkToCode="https://github.com/Otabek996/responsive-to-website"
          />

          <Card
            img={LOGOIPSUM}
            title="Logoipsun"
            description="Landing website using HTML & CSS."
            linkToWebsite="https://charming-taffy-4041d1.netlify.app/"
            linkToCode="https://github.com/Otabek996/logoipsum-website"
          />
        </div>
      </div>
    </section>
  )
};

export default Works;