const QUICK_BREAKPOINT = 30;
const calculatePoints = (answersArr) => {
  if (!Array.isArray(answersArr)) {
    throw new Error(`Incorrect value`);
  }
  const answers = [...answersArr];
  let result = 0;

  answers.forEach((elem) => {
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
  return result;
};

export default calculatePoints;
