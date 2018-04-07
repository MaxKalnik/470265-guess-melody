import utils from '../utils.js';

const NOTES_MIN = 0;
const NOTES_MAX = 4;
const QUICK_BREAKPOINT = 30;
const calculatePoints = (answersArr, notesRemained) => {
  if (!Array.isArray(answersArr) || answersArr.length < 10 || typeof notesRemained !== `number` || !utils.checkIsInRange(notesRemained, NOTES_MIN, NOTES_MAX)) {
    return -1;
  }
  const answers = [...answersArr];
  // const notes = notesRemained;
  let result = 0;
  let isError = false;

  answers.forEach((elem) => {
    if (elem.success === null || typeof elem.success !== `boolean` || !elem.time || elem.time < 0) {
      isError = true;
    }
    if (elem.success) {
      if (elem.time < QUICK_BREAKPOINT) {
        result += 2;
      } else {
        result++;
      }
    } else {
      result -= 2;
    }
  });

  if (isError) {
    return -1;
  }
  return result;
};

export default calculatePoints;
