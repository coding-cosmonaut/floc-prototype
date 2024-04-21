import "./style.css";
import {
  hamburger,
  mobileNav,
  bottomText,
  topText,
  logo,
  rightContainer,
} from "./DOM";
import toggle from "./mobileNavigation";

hamburger.addEventListener("click", () => {
  toggle(hamburger.firstElementChild, "line1");
  toggle(hamburger.lastElementChild, "line2");
  toggle(mobileNav, "mobile-nav-open");
});

window.addEventListener("load", () => {
  toggle(topText, "top-show");
  toggle(rightContainer, "slide-up-animation");
  setTimeout(() => {
    toggle(bottomText, "bottom-show");
    toggle(logo, "show-logo");
    // setTimeout(() => {
    //   toggle(rightContainer, "slide-up-animation");
    // }, 500);
  }, 500);
});
