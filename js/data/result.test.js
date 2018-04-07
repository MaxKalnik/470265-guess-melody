import {assert} from 'chai';
import showResult from './result';

const otherAnswrs = [10, 7, 6, 18, 12, 4, 9, 5, 14];
const otherAnswrsIncorrectValueType = [10, 7, false, 18, 12, 4, 9, 5, 14];
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
const pDataOver = {
  points: 21,
  notesLeft: 2,
  timeLeft: 30
};
const pDataOverNotes = {
  points: 15,
  notesLeft: 8,
  timeLeft: 30
};
const pDataIncorrectLack = {
  points: 8,
  notesLeft: 2
};
const pDataIncorrectValue = {
  points: true,
  notesLeft: `2`,
  timeLeft: 30
};
const pDataIncorrectType = [[], 5, `someString`, true];
const otherAnswrsIncorrectType = [{}, 5, `someString`, true];

describe(`ShowResult function`, () => {
  it(`should return -1 when there is at least one parameter with incorrect type `, () => {
    assert.equal(-1, showResult(otherAnswrs, pDataIncorrectType[0]));
    assert.equal(-1, showResult(otherAnswrs, pDataIncorrectType[1]));
    assert.equal(-1, showResult(otherAnswrs, pDataIncorrectType[2]));
    assert.equal(-1, showResult(otherAnswrs, pDataIncorrectType[3]));
    assert.equal(-1, showResult(otherAnswrsIncorrectType[0], pDataWin));
    assert.equal(-1, showResult(otherAnswrsIncorrectType[1], pDataWin));
    assert.equal(-1, showResult(otherAnswrsIncorrectType[2], pDataWin));
    assert.equal(-1, showResult(otherAnswrsIncorrectValueType, pDataWin));
  });
  it(`should return -1 when at least one attribute from second parameter is incorrect or absent`, () => {
    assert.equal(-1, showResult(otherAnswrs, pDataIncorrectLack));
    assert.equal(-1, showResult(otherAnswrs, pDataIncorrectValue));
  });
  it(`should return string where place - 1st, players - 10, percentage - 90%`, () => {
    assert.equal(`Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`, showResult(otherAnswrs, pDataWinQuick));
  });
  it(`should return string where place - 6th, players - 10, percentage - 40%`, () => {
    assert.equal(`Вы заняли 6 место из 10 игроков. Это лучше, чем у 40% игроков`, showResult(otherAnswrs, pDataWin));
  });
  it(`should return string where place - 10th, players - 10, percentage - 0%`, () => {
    assert.equal(`Вы заняли 10 место из 10 игроков. Это лучше, чем у 0% игроков`, showResult(otherAnswrs, pDataWinLast));
  });
  it(`should return -1 when attribute points of second parameter is not in range 0..20`, () => {
    assert.equal(-1, showResult(otherAnswrs, pDataOver));
  });
  it(`should return -1 when attribute notes of second parameter is not in range 0..4`, () => {
    assert.equal(-1, showResult(otherAnswrs, pDataOverNotes));
  });
  it(`should return corresponding lose message when time is over`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, showResult(otherAnswrs, pDataLoseTime));
  });
  it(`should return corresponding lose message when there is no attemps left`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, showResult(otherAnswrs, pDataLoseAttempts));
  });
});
