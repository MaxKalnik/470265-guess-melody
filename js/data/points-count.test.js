import {assert} from 'chai';
import calculatePoints from './points-count.js';

const answersCorrect = [
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  }
];
const answersCorrectQuick = [
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 25
  }
];
const answersOneIncorrect = [
  {
    success: false,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  }
];
const answersOneIncorrectQuick = [
  {
    success: false,
    time: 45
  },
  {
    success: true,
    time: 25
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: 45
  }
];

describe(`Points count function`, () => {
  it(`should return 10 when all answers correct and not quick`, () => {
    assert.equal(10, calculatePoints(answersCorrect));
  });
  it(`should return 7 when there is one incorrect among 10 answers`, () => {
    assert.equal(7, calculatePoints(answersOneIncorrect));
  });
  it(`should return 20 when all answers are correct and quick`, () => {
    assert.equal(20, calculatePoints(answersCorrectQuick));
  });
  it(`should return 8 when there is one incorrect among 10 answers and another one quick`, () => {
    assert.equal(8, calculatePoints(answersOneIncorrectQuick));
  });
});
