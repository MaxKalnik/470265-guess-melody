import utils from '../utils.js';

const showResult = (othersPoints, playerData) => {
  const ratings = [...othersPoints];
  if (!utils.checkIsInRange(playerData.points, 0, 20) || !utils.checkIsInRange(playerData.notesLeft, 0, 4) || playerData.timeLeft < 0) {
    throw new Error(`Incorrect value`);
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
