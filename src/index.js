import "./style.css";
import {
  hamburger,
  mobileNav,
  bottomText,
  logo,
  topText,
  rightContainer,
  leftColumn,
} from "./DOM";
import toggle from "./mobileNavigation";
import render from "./homepage";
import gradient from "./gradient";

hamburger.addEventListener("click", () => {
  toggle(hamburger.firstElementChild, "line1");
  toggle(hamburger.lastElementChild, "line2");
  toggle(mobileNav, "mobile-nav-open");
});


window.addEventListener("load", () => {
  toggle(logo, "show-logo");
  render()
  gradient.initGradient("#gradient-canvas");
});


// window.addEventListener("load", () => {
//   toggle(topText, "top-show");
//   toggle(rightContainer, "slide-up-animation");
//   setTimeout(() => {
//     toggle(bottomText, "bottom-show");
//     toggle(logo, "show-logo");
//   }, 500);
// });
