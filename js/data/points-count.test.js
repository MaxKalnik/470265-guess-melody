import {assert} from 'chai';
import calculatePoints from './points-count.js';

// mocha.setup(`TDD`);

const answersCorrect = [
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  }
];
const answersCorrectQuick = [
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  },
  {
    sucess: true,
    time: 30
  }
];
const answersShort = [
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  }
];
const answersOneIncorrect = [
  {
    sucess: false,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  }
];
const answersOneIncorrectQuick = [
  {
    sucess: false,
    time: 45
  },
  {
    sucess: true,
    time: 25
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  }
];
const answersIncorrectValue = [
  {
    sucess: 1,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: `45`
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  },
  {
    sucess: true,
    time: 45
  }
];
const incorrectValue = [{}, 5, `someString`, true];

// should be an array, element of array should have 2 attributes, 1-st attribute should be boolean, 2-nd should be a number,

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
});

// mocha.run();
