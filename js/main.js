'use strict';

(function () {
  const Keycodes = {
    LEFT: 37,
    RIGHT: 39
  };
  const templatesFragment = document.querySelector('#templates').content;
  const screens = templatesFragment.querySelectorAll('.main');
  const sectionMain = document.querySelector('.main');

  sectionMain.appendChild(screens[0]);

  let index = 0;
  let switchScreen = {
    previous: () => {
      if (index > 0) {
        sectionMain.firstChild.remove();
        sectionMain.appendChild(screens[--index]);
      }
    },
    next: () => {
      if (index < screens.length - 1) {
        sectionMain.firstChild.remove();
        sectionMain.appendChild(screens[++index]);
      }
    }
  };

  let keydownHandler = (evt) => {
    if(evt.keyCode === Keycodes.LEFT && evt.altKey) {
      switchScreen.previous();
    }
    if(evt.keyCode === Keycodes.RIGHT && evt.altKey) {
      switchScreen.next();
    }
  };

  document.addEventListener(`keydown`, keydownHandler);
})();
