import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import type { CardItemProps } from './Card.types';

function Card(item: CardItemProps) {
  return (
    <>
      <li className={[styles['card'], styles[`card--${item.className}`]].join(' ')}>
        <div className={styles['card__item']}>
          <div className={styles['card__header']}>
            <h2 className={styles['card__city']}>{item.city}</h2>
            <Image src={item.flag} width={40} height={40} loading="lazy" />
          </div>
          <p className={styles['card__phone']}>{item.phone}</p>
          <p className={styles['card__email']}>{item.email}</p>
          <p className={styles['card__address']}>{item.address}</p>
        </div>
      </li>
    </>
  );
}

export default Card;
