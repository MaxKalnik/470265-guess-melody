import createElement from '../element.js';
import templateWelcome from './welcome.js';
import switchScreen from '../render.js';

const template = `\
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const resultLose = createElement(template);
const replayButton = resultLose.querySelector(`.main-replay`);
replayButton.addEventListener(`click`, () => switchScreen(templateWelcome));

export default resultLose;
