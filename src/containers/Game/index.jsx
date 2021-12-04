import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { dragStart, dragMove, dragEnd } from './utils';
import styles from './style.module';

export const Game = () => {
  const containerRef = useRef();
  const cardRef = useRef();
  const cards = useSelector(state => state.gameReducer.cards);

  useEffect(() => {
    let refValue = null;

    if (cardRef.current) {
      const shift = {
        x: 0,
        y: 0,
      };
      refValue = cardRef.current;
      refValue.addEventListener('touchstart', dragStart(shift, refValue));
      refValue.addEventListener('touchmove', dragMove(shift, refValue));
      refValue.addEventListener('touchend', dragEnd(refValue));
      refValue.ondragstart = () => {
        return null;
      }

      return () => {
        refValue.removeEventListener('touchstart', dragStart);
        refValue.removeEventListener('touchmove', dragMove);
      };
    }
  }, []);

  const cardsElems = cards?.map((item, index) => (
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
