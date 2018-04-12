import {assert} from 'chai';
import calculatePoints from './points-count.js';

describe(`Points count function`, () => {
  it(`should return 3 when 3 answers correct and not quick`, () => {
    assert.equal(3, calculatePoints([{success: true, time: 45}, {success: true, time: 45}, {success: true, time: 45}]));
  });
  it(`should return 2 when there is two quick answers and one wrong`, () => {
    assert.equal(2, calculatePoints([{success: true, time: 25}, {success: true, time: 25}, {success: false, time: 45}]));
  });
  it(`should return 6 when all answers are correct and quick`, () => {
    assert.equal(6, calculatePoints([{success: true, time: 25}, {success: true, time: 25}, {success: true, time: 25}]));
  });
  it(`should return 3 there is two quick answers and one not quick`, () => {
    assert.equal(3, calculatePoints([{success: true, time: 25}, {success: true, time: 25}, {success: true, time: 45}, {success: false, time: 45}]));
  });
});
