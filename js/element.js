const createElement = (markup) => {
  const div = document.createElement(`div`);
  div.innerHTML = markup + ``;
  const childNodes = [...div.children];
  const fragment = document.createDocumentFragment();
  childNodes.forEach((elem) => {
    fragment.appendChild(elem);
  });
  return fragment;
};

export default createElement;
