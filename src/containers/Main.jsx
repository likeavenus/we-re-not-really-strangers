import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Game } from './Game';
import store from '../store';
import { Provider } from 'react-redux';

import styles from '../style.module';

export const Main = () => {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </Provider>
  );
};
