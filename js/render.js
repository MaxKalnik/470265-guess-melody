const app = document.querySelector(`.app`);
const copyright = document.querySelector(`.copyright`);
const switchScreen = (item) => {
  app.querySelector(`.main`).remove();
  app.insertBefore(item, copyright);
};

export default switchScreen;
