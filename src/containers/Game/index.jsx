import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dragStart, dragMove, dragEnd } from './utils';
import styles from './style.module';

export const Game = () => {
  const containerRef = useRef();
  const cardRef = useRef();
  const cards = useSelector(state => state.game.cards);
  const dispatch = useDispatch();

  useEffect(() => {

    if (cardRef.current) {
      const shift = {
        x: 0,
        y: 0,
      };
      cardRef.current.addEventListener('touchstart', dragStart(shift, cardRef.current));
      cardRef.current.addEventListener('touchmove', dragMove(shift, cardRef.current));
      cardRef.current.addEventListener('touchend', dragEnd(cardRef.current, dispatch));
      cardRef.current.ondragstart = () => {
        return null;
      }

      return () => {
        cardRef.current.removeEventListener('touchstart', dragStart);
        cardRef.current.removeEventListener('touchmove', dragMove);
        cardRef.current.removeEventListener('touchend', dragEnd);
      };
    }
  }, [dispatch]);

  const cardsElems = cards?.map((item, index) => (
    <div ref={item.active ? cardRef : null} id={item.id} key={item.id} style={{ zIndex: cards.length - item.id, transform: `scale(${(20 - index) / 20}) translateY(-${30 * index}px)` }} className={styles.card}>
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
      <section className={styles.game__container} ref={containerRef}>
        {cardsElems}
      </section>
    </div>
  );
};
