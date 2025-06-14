import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 1000,
  betAmount: 0,
  gameStatus: 'idle', // idle | running | won | lost
  chickenPos: { x: 4, y: 9 },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    placeBet: (state, action) => {
      state.betAmount = action.payload;
      state.balance -= action.payload;
      state.gameStatus = 'running';
    },
    updateBalance: (state, action) => {
      state.balance += action.payload;
    },
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
    resetGame: () => initialState,
  },
});

export const { placeBet, updateBalance, setGameStatus, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
