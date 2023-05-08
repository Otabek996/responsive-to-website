import React from 'react';

import styles from '../../styles/Card.module.css';

const Card = (props) => {
  return (
    <article className={styles.card}>
        <img className={styles.card__img} src={props.img} alt="websites" />

        <div className={styles.card__info}>
            <h2 className={styles.card__title}>{props.title}</h2>
            <p className={styles.card__description}>{props.description}</p>

            <div className={styles.card__btn}>
                <a href={props.linkToWebsite} target='_blank' rel="noreferrer">
                    <button className={styles.card__btn_link} type='submit'>Visit Website</button>
                </a>

                <a href={props.linkToCode} target='_blank' rel="noreferrer">
                    <button className={styles.card__btn_link} type='submit'>Code</button>
                </a>
            </div>
        </div>
    </article>
  )
};

export default Card;