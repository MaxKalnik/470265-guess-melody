import createElement from '../element.js';
import templateWelcome from './welcome.js';
import switchScreen from '../render.js';

const template = `\
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultAttempts = createElement(template);
const replayButton = resultAttempts.querySelector(`.main-replay`);
replayButton.addEventListener(`click`, () => switchScreen(templateWelcome));

export default resultAttempts;
