import React from 'react';
import Card from 'components/card/Card';
import styles from './CardsList.module.scss';
import type { CardsListItemProps } from './CardsList.types';
import type { CardItemProps } from 'components/card/Card.types';

function CardsList(props: CardsListItemProps) {
  return (
    <>
      <ul className={styles['cards-list']}>
        {props.cardsList.map((cardItem: CardItemProps) => {
          return (
            <Card 
              key={cardItem.city}
              city={cardItem.city} 
              flag={cardItem.flag} 
              phone={cardItem.phone} 
              email={cardItem.email} 
              address={cardItem.address}
              className={cardItem.className}
            />
          )
        })}
      </ul>
    </>
  );
}

export default CardsList;
