// RENDER HOMEPAGE
import { leftColumn } from "./DOM";

const create = function createDivElements(element) {
  return document.createElement(element);
};

const render = function renderLeftColumnHomepage() {
  const canvasEl = create("canvas");
  canvasEl.setAttribute("id", "gradient-canvas");

  const topDiv = create("div");
  topDiv.setAttribute("class", "top-container");
  const bottomDiv = create("div");
  bottomDiv.setAttribute("class", "bottom-container");
  const lastDivOnLeftColumn = create("div");
  lastDivOnLeftColumn.setAttribute("class", "last-container slideUpDelayed");

  const topH1 = create("h1");
  topH1.setAttribute("class", "top-h1 slideUp");
  topH1.textContent = "Make";
  const bottomH1 = create("h1");
  bottomH1.setAttribute("class", "bottom-h1 slideDown");
  bottomH1.textContent = "New";
  const lastH2 = create("h2");
  lastH2.setAttribute("class", "last-h2 slideUpDelayed");
  lastH2.textContent = "Friends";

  topDiv.append(topH1);
  bottomDiv.append(bottomH1);
  lastDivOnLeftColumn.append(lastH2);

  leftColumn.append(canvasEl, topDiv, bottomDiv, lastDivOnLeftColumn);
};

export default render;
