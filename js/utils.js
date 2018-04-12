const utils = {
  getRandomBetween: (min, max) => Math.round(Math.random() * (max - min) + min),
  checkIsInRange: (number, ...range) => {
    if (typeof number !== `number`) {
      return false;
    }
    const interval = [...range];
    interval.sort((a, b) => {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    return (number >= interval[0] && number <= interval[interval.length - 1]);
  },
  showInfoMessage: (messageText) => {
    const paragraph = document.createElement(`p`);
    paragraph.textContent = messageText + ``;
    paragraph.style = `position: absolute; color: red; font-size: 16px; top: 20px; right: 20px;`;

    const body = document.querySelector(`body`);
    body.append(paragraph);
    setTimeout(() => {
      paragraph.remove();
    }, 3000);
  }
};

export default utils;
