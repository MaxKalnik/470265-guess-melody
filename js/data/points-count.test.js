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
const answersShort = [
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
const answersIncorrectValue = [
  {
    success: 1,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: `45`
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
const answersIncorrectTime = [
  {
    success: 1,
    time: 45
  },
  {
    success: true,
    time: 45
  },
  {
    success: true,
    time: `45`
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
const answersWithoutAttr = [
  {
    success: true,
    time: 45
  },
  {
    success: true
  },
  {
    success: true,
    time: 45
  },
  {
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
const incorrectValue = [{}, 5, `someString`, true];

describe(`Points count function`, () => {
  it(`should return -1 when less than 10 answers`, () => {
    assert.equal(-1, calculatePoints(answersShort, 4));
  });
  it(`should return 10 when all answers correct and not quick`, () => {
    assert.equal(10, calculatePoints(answersCorrect, 4));
  });
  it(`should return 7 when there is one incorrect among 10 answers`, () => {
    assert.equal(7, calculatePoints(answersOneIncorrect, 4));
  });
  it(`should return -1 when input incorrect paramerters`, () => {
    assert.equal(-1, calculatePoints(incorrectValue[0], 4));
    assert.equal(-1, calculatePoints(incorrectValue[1], 4));
    assert.equal(-1, calculatePoints(incorrectValue[2], 4));
    assert.equal(-1, calculatePoints(incorrectValue[3], 4));
    assert.equal(-1, calculatePoints(answersIncorrectValue, 4));
  });
  it(`should return 20 when all answers are correct and quick`, () => {
    assert.equal(20, calculatePoints(answersCorrectQuick, 4));
  });
  it(`should return 8 when there is one incorrect among 10 answers and another one quick`, () => {
    assert.equal(8, calculatePoints(answersOneIncorrectQuick, 4));
  });
  it(`should return -1 when time is negative number`, () => {
    assert.equal(-1, calculatePoints(answersIncorrectTime, 4));
  });
  it(`should return -1 in array element at least one attribute in absent`, () => {
    assert.equal(-1, calculatePoints(answersWithoutAttr, 4));
  });
  it(`should return -1 when second parameter not int between 0..4`, () => {
    assert.equal(-1, calculatePoints(answersCorrect, incorrectValue[2]));
  });
});
