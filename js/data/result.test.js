import {assert} from 'chai';
import showResult from './result';

const otherAnswrs = [10, 7, 6, 18, 12, 4, 9, 5, 14];
const pDataWin = {
  points: 8,
  notesLeft: 2,
  timeLeft: 30
};
const pDataWinQuick = {
  points: 20,
  notesLeft: 2,
  timeLeft: 30
};
const pDataWinLast = {
  points: 2,
  notesLeft: 2,
  timeLeft: 30
};
const pDataLoseTime = {
  points: 1,
  notesLeft: 2,
  timeLeft: 0
};
const pDataLoseAttempts = {
  points: 1,
  notesLeft: 0,
  timeLeft: 30
};

describe(`ShowResult function`, () => {
  it(`should return string where place - 1st, players - 10, percentage - 90%`, () => {
    assert.equal(`Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`, showResult(otherAnswrs, pDataWinQuick));
  });
  it(`should return string where place - 6th, players - 10, percentage - 40%`, () => {
    assert.equal(`Вы заняли 6 место из 10 игроков. Это лучше, чем у 40% игроков`, showResult(otherAnswrs, pDataWin));
  });
  it(`should return string where place - 10th, players - 10, percentage - 0%`, () => {
    assert.equal(`Вы заняли 10 место из 10 игроков. Это лучше, чем у 0% игроков`, showResult(otherAnswrs, pDataWinLast));
  });
  it(`should return corresponding lose message when time is over`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, showResult(otherAnswrs, pDataLoseTime));
  });
  it(`should return corresponding lose message when there is no attemps left`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, showResult(otherAnswrs, pDataLoseAttempts));
  });
});
