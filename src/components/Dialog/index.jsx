import React from 'react';

import styles from './style.module';

export const Dialog = ({ open, setState }) => {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.dialog}>
        <p className={styles.dialog__text}>
          <span>Мы не незнакомцы</span> — игра в которой предстоит отвечать на вопросы со
          своим партнёром по очереди, смахивая карточки влево или вправо. Вы можете узнать то что не знали о своём партнёре,
          или вспомнить то что давно забыли и с радостью cмогли бы поделиться. Я надеюсь, вы хорошо проведете
          время 😊
        </p>
        <p className={styles.dialog__author}>Игра в разработке, поэтому предложения и пожелания можете присылать в&nbsp;телеграм&nbsp;<a href="https://t.me/likeavenus">@likeavenus</a></p>
        <button className={styles.dialog__btn} onClick={setState}>
          Окей
        </button>
      </div>
    </div>
  );
};
