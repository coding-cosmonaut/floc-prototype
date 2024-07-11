// RENDER HOMEPAGE
import { create, mainContent } from "./DOM";
import gradient from "./gradient";
import toggle from "./mobileNavigation";
import getContent from "./pages";

let timerID = "";

const cycle = function cycleWordsOnHomepage(words) {
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

  // ELEMENTS
  const wrapperLeft = create("section");
  const topDiv = create("div");
  const bottomDiv = create("div");
  const lastDivOnLeftColumn = create("div");
  // ELEMENTS

  // CONTAINER LEFT
  wrapperLeft.setAttribute("class", "wrapper-left-column");
  // CONTAINER LEFT

  // TOP H1
  topDiv.setAttribute("class", "top-container");
  // TOP H1

  bottomDiv.setAttribute("class", "bottom-container");

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

  wrapperLeft.append(canvasEl, topDiv, bottomDiv, lastDivOnLeftColumn);
  mainContent.append(wrapperLeft);
};

const rightHomepage = function constructRightColumnHomepage() {
  // ELEMENTS
  const wrapperRight = create("section");
  const heading = create("h2");
  const paragraphDescription = create("p");
  const signUpButton = create("button");
  const learnMoreButton = create("button");
  const containerWrapper = create("div");
  const buttonContainer = create("div");
  // ELEMENTS

  // CONTAINER RIGHT
  wrapperRight.setAttribute("class", "wrapper-right-column");
  // CONTAINER RIGHT

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
  signUpButton.addEventListener("click", (e) => {
    getContent(e, "sign-up");
  });
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
  wrapperRight.append(containerWrapper);
  mainContent.append(wrapperRight);
};

const timer = function createIntervalForCycleWords() {
  timerID = setInterval(() => {
    cycle(document.querySelector(".bottom-container"));
  }, 3400);
};

const check = function checkForLogoClass() {
  const logoText = document.querySelector(".logo-word");
  if (logoText.classList.contains("show-logo")) {
    return true;
  }
  return false;
};

const render = function renderHomepage() {
  leftHomepage();
  rightHomepage();
  if (!check()) {
    toggle(document.querySelector(".logo-word"), "show-logo");
  }
  gradient.initGradient("#gradient-canvas");
  timer();
};

export { render, timerID };
