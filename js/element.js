const createElement = (markup) => {
  const div = document.createElement(`div`);
  div.innerHTML = markup;
  return div.firstElementChild;
};

export default createElement;
