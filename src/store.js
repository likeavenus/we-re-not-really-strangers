import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from './containers/Game/gameSlice';


export default configureStore({
  reducer: {
    gameReducer: gameSlice,
  },
});