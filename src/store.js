import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './containers/Game/gameSlice';


export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});