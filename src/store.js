import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './containers/Game/gameSlice';


export default configureStore({
  reducer: {
    gameReducer,
  },
});