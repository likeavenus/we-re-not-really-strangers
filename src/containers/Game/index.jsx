import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dragStart, dragMove, dragEnd } from './utils';
import { Dialog } from '../../components/Dialog';
import { SnowFlakes } from '../../components/SnowFlakes';
import styles from './style.module';

export const Game = () => {
  
  const [open, setState] = useState(true);
  const handleOnClick = useCallback(() => {
    setState((prev) => !prev);
  });

  const containerRef = useRef();
  const cards = useSelector((state) => state.game.cards);
  const dispatch = useDispatch();

  const allCardsLength = useRef(cards.length);

  console.log('cards: ', cards);

  const length = allCardsLength.current;

  useEffect(() => {
    if (containerRef.current) {
      const shift = {
        x: 0,
        y: 0,
      };
      containerRef.current.addEventListener(
        'touchstart',
        dragStart(shift, containerRef.current),
      );
      containerRef.current.addEventListener(
        'touchmove',
        dragMove(shift, containerRef.current),
      );
      containerRef.current.addEventListener(
        'touchend',
        dragEnd(containerRef.current, dispatch),
      );
      containerRef.current.ondragstart = () => {
        return null;
      };

      return () => {
        containerRef.current.removeEventListener('touchstart', dragStart);
        containerRef.current.removeEventListener('touchmove', dragMove);
        containerRef.current.removeEventListener('touchend', dragEnd);
      };
    }
  }, [dispatch]);

  const cardsElems = cards?.map((item, index) => (
      <div
        id={item.id}
        key={item.id}
        style={{
          zIndex: cards.length === 1 ? 1 : length - item.id,
          transform: `scale(${(20 - index) / 20}) translateY(-${30 * index}px)`,
        }}
        className={`${styles.card} ${styles[item.type]} card`}
      >
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
      <SnowFlakes />
      <Dialog open={open} setState={handleOnClick} />
      <section className={styles.game__container} ref={containerRef}>
        {cardsElems}
      </section>
      <button className={styles.game__info} onClick={handleOnClick}></button>
    </div>
  );
};
