import utils from '../utils.js';

const LOSE_MESSAGE_TIME = `К сожалению время закончилось!`;
const initTimer = (performanceTime) => {
  return {
    secondsLeft: performanceTime,
    tick() {
      if (this.secondsLeft === 0) {
        utils.showInfoMessage(LOSE_MESSAGE_TIME);
        return -1;
      }
      return --this.secondsLeft;
    }
  };
};

export default initTimer;
