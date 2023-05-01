import React from 'react';

import styles from '../../styles/Card.module.css';

import WEBONE from '../../images/logoipsum-website.png'

const Card = () => {
  return (
    <article className={styles.card}>
        <div className={styles.card__img}>
            <img src={WEBONE} alt="" />
        </div>

        <div className={styles.card__info}>
            <h2 className={styles.card__title}>Web site title</h2>
            <p className={styles.card__description}>Description</p>

            <div className={styles.card__btn}>
                <form action="">
                    <button className={styles.card__btn_link} type='submit'>Visit Website</button>
                </form>

                <form action="">
                    <button className={styles.card__btn_link} type='submit'>Code</button>
                </form>
            </div>
        </div>
    </article>
  )
}

export default Card