import utils from '../utils.js';

const showResult = (othersPoints, playerData) => {
  if (!Array.isArray(othersPoints) || typeof playerData !== `object` || (playerData.notesLeft !== 0 && !playerData.notesLeft) || (playerData.timeLeft !== 0 && !playerData.timeLeft)) {
    return -1;
  }
  let isError = false;
  const ratings = [...othersPoints];
  ratings.forEach((elem) => {
    if (typeof elem !== `number`) {
      isError = true;
    }
  });
  if (!utils.checkIsInRange(playerData.points, 0, 20) || !utils.checkIsInRange(playerData.notesLeft, 0, 4) || playerData.timeLeft < 0) {
    isError = true;
  }
  if (isError) {
    return -1;
  }
  if (playerData.notesLeft > 0 && playerData.timeLeft > 0) {
    ratings.push(playerData.points);
    ratings.sort((a, b) => {
      if (a > b) {
        return -1;
      } else {
        return 1;
      }
    });
    const place = ratings.indexOf(playerData.points);
    const percent = (ratings.length - 1 - place) / (ratings.length * 0.01);
    return `Вы заняли ${place + 1} место из ${ratings.length} игроков. Это лучше, чем у ${percent}% игроков`;
  } else if (playerData.notesLeft === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (playerData.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  return -1;
};

export default showResult;
