const hamburger = document.querySelector(".hamburger-mobile");
const mobileNav = document.querySelector(".mobile-nav");
// const bottomText = document.querySelector(".bottom-container h1");
// const topText = document.querySelector(".top-container h1");
// const logo = document.querySelector(".logo-word");
// const rightContainer = document.querySelector(".right-container");
// MAIN
const mainContent = document.querySelector("#main-content");
// MAIN

const create = function createDivElements(element) {
  return document.createElement(element);
};

export {
  hamburger,
  mobileNav,
//   bottomText,
//   topText,
//   logo,
//   rightContainer,
  create,
  mainContent,
};
