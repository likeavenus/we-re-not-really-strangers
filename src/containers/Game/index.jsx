import React, { useCallback, useEffect, useState, useRef } from 'react';

import { dragStart, dragMove } from './utils';
import styles from './style.module';

const cards = [
  {
    id: 0,
    type: 'love',
    text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
    active: true,
  },
  {
    id: 1,
    type: 'love',
    text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
    active: false,
  },
  {
    id: 2,
    type: 'love',
    text: 'Как думаешь, я когда-нибудь сбегал из дома будучи подростком?',
    active: false,
  },
];

export const Game = () => {
  const containerRef = useRef();
  const cardRef = useRef();
  const shift = useRef({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('touchstart', dragStart(shift.current, cardRef.current));
      cardRef.current.addEventListener('touchmove', dragMove(shift.current, cardRef.current));
      cardRef.current.ondragstart = () => {
        return null;
      }

      return () => {
        cardRef.current.removeEventListener('touchstart', dragStart);
        cardRef.current.removeEventListener('touchmove', dragMove);
      };
    }
  }, []);

  const cardsElems = cards.map((item, index) => (
    <div ref={item.active ? cardRef : null} key={item.id} style={{ zIndex: cards.length - item.id, transform: `scale(${(20 - index) / 20}) translateY(-${30 * index}px)` }} className={styles.card}>
      <div className={styles.card__body}>
        <p className={styles.card__text}>{item.text}</p>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.footer__text}>мы не незнакомцы</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.game} ref={containerRef}>
      <div className={styles.game__container}>
        {cardsElems}
      </div>
    </div>
  );
};
