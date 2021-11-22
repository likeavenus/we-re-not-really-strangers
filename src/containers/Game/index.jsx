import React, { useCallback, useEffect, useState } from 'react';

import styles from './style.module';

export const Game = () => {

  return (
    <div className={styles.game}>
      <div className={styles.game__container}>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <p className={styles.card__text}>Как думаешь, я когда-нибудь сбегал из дома будучи подростком?</p>
          </div>
          <div className={styles.card__footer}>
            <p className={styles.footer__text}>мы не незнакомцы</p>
          </div>
        </div>
      </div>
    </div>
  );
};
