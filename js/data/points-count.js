// const responses = [];

const calculatePoints = (answersArr, notesRemained) => {
  const answers = [...answersArr];
  const notes = notesRemained;
  let result = 0;
  if (answers.length === 0) {
    result = -1;
  } else {
    result = 0;
  }
  if (notes) {
    result = -1;
  } else {
    result = 0;
  }

  return result;
};

export default calculatePoints;
