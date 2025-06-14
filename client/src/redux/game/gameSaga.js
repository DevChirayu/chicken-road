import { put, takeLatest, delay } from 'redux-saga/effects';
import { updateBalance, setGameStatus } from './gameSlice';

function* handlePlaceBet(action) {
  yield delay(2000); // Simulate gameplay
  const won = Math.random() > 0.5;

  if (won) {
    yield put(updateBalance(action.payload * 2));
    yield put(setGameStatus('won'));
  } else {
    yield put(setGameStatus('lost'));
  }
}

function* gameSaga() {
  yield takeLatest('game/placeBet', handlePlaceBet);
}

export default gameSaga;
