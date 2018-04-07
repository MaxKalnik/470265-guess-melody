import {assert} from 'chai';
import initTimer from './timer.js';

const tmr = initTimer(120);
const tmrOne = initTimer(1);

describe(`createTimer function`, () => {
  it(`should return -1 when there's no parameter`, () => {
    assert.equal(-1, initTimer());
  });
  it(`should return -1 when parameter is NaN`, () => {
    assert.equal(-1, initTimer(true));
  });
  it(`should return -1 when parameter is negative number`, () => {
    assert.equal(-1, initTimer(-4));
  });
  it(`should return an object`, () => {
    assert.equal(`object`, typeof initTimer(120));
  });
  it(`created object secondsLeft attribute should be equal to input parameter(120)`, () => {
    assert.equal(120, initTimer(120).secondsLeft);
  });
  it(`created object tick attribute must be a function`, () => {
    assert.equal(`function`, typeof initTimer(120).tick);
  });
});
describe(`Timer's tick function`, () => {
  it(`should return 119 when secondsLeft is 120`, () => {
    assert.equal(119, tmr.tick());
  });
  it(`should return 0 when secondsLeft is 1`, () => {
    assert.equal(0, tmrOne.tick());
  });
});
