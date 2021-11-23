import React, { useCallback, useEffect, useState } from 'react';

import styles from './style.module';

const cards = [
  {
    id: 0,
    type: 'love',
    text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
  },
  {
    id: 1,
    type: 'love',
    text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
  },
  {
    id: 2,
    type: 'love',
    text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
  },
];

export const Game = () => {
  const cardsElems = cards.map((item, index) => (
    <div key={item.id} style={{ zIndex: cards.length - item.id, transform: `scale(${(20 - index) / 20}) translateY(-${30 * index}px)` }} className={styles.card}>
      <div className={styles.card__body}>
        <p className={styles.card__text}>{item.text}</p>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.footer__text}>мы не незнакомцы</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.game}>
      <div className={styles.game__container}>
        {cardsElems}
      </div>
    </div>
  );
};
