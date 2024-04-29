// RENDER HOMEPAGE
import { leftColumn, rightColumn } from "./DOM";

const create = function createDivElements(element) {
  return document.createElement(element);
};

const cycle = function cycleWords(words) {
  const nodelistOfWords = words.childNodes;
  for (let i = 0; i < nodelistOfWords.length; i++) {
    if (nodelistOfWords[i].getAttribute("data-isActive") === "true") {
      nodelistOfWords[i].classList.remove("slideDownFurther");
      nodelistOfWords[i].setAttribute("data-isActive", "false");
      nodelistOfWords[i].classList.add("visible-false");
      if (nodelistOfWords[i + 1]) {
        nodelistOfWords[i + 1].classList.add("slideDownFurther");
        nodelistOfWords[i + 1].classList.remove("visible-false");
        nodelistOfWords[i + 1].setAttribute("data-isActive", "true");
      } else {
        nodelistOfWords[0].classList.add("slideDownFurther");
        nodelistOfWords[0].classList.remove("visible-false");
        nodelistOfWords[0].setAttribute("data-isActive", "true");
      }
      break;
    }
  }
};

const leftHomepage = function constructLeftColumnHomepage() {
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
  topH1.textContent = "Create";
  const bottomH1 = create("h1");
  bottomH1.setAttribute("data-isActive", "true");
  bottomH1.setAttribute("class", "bottom-h1 slideDownFurther");
  bottomH1.textContent = "Events";

  const secondH2 = create("h1");
  secondH2.setAttribute("class", "second-h2 visible-false");
  secondH2.textContent = "Memories";

  topDiv.append(topH1);
  bottomDiv.append(bottomH1, secondH2);

  leftColumn.append(canvasEl, topDiv, bottomDiv, lastDivOnLeftColumn);
};

const rightHomepage = function constructRightColumnHomepage() {
  // ELEMENTS
  const heading = create("h2");
  const paragraphDescription = create("p");
  const signUpButton = create("button");
  const learnMoreButton = create("button");
  const containerWrapper = create("div");
  const buttonContainer = create("div");
  // ELEMENTS

  // HEADING
  heading.setAttribute("class", "right-heading");
  heading.textContent =
    "With Floc You Can Create New Friendships and Memories! ";
  // HEADING

  // PARAGRAPH
  paragraphDescription.setAttribute("class", "explanation-p ");
  paragraphDescription.textContent =
    "Discover a vibrant world of connections with our app that revolutionizes socializing! Seamlessly create and join events tailored to your interests, from cozy book clubs to adrenaline-pumping adventure weekends. With intuitive features and a diverse community, ignite unforgettable experiences and forge lasting friendships at your fingertips.";
  // PARAGRAPH

  // SIGN UP
  signUpButton.setAttribute("class", "sign-up-bttn");
  signUpButton.textContent = "Sign-Up!";
  // SIGN UP

  // LEARN MORE
  learnMoreButton.setAttribute("class", "learn-button");
  learnMoreButton.textContent = "Learn More";
  // LEARN MORE

  // CONTAINER
  containerWrapper.setAttribute("class", "right-container slide-up-animation");
  // CONTAINER

  // BUTTON CONTAINER
  buttonContainer.setAttribute("class", "right-bttn-container");
  // BUTTON CONTAINER

  buttonContainer.append(signUpButton, learnMoreButton);

  containerWrapper.append(heading, paragraphDescription, buttonContainer);
  rightColumn.append(containerWrapper);
};

const render = function renderHomepage(left, right) {
  leftHomepage();
  rightHomepage();
};

export { render, cycle };
