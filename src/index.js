import "./style.css";
import { hamburger, mobileNav } from "./DOM";
import toggle from "./mobileNavigation";
import getContent from "./pages";

hamburger.addEventListener("click", () => {
  toggle(hamburger.firstElementChild, "line1");
  toggle(hamburger.lastElementChild, "line2");
  toggle(mobileNav, "mobile-nav-open");
});

// LOAD INITIAL HOMEPAGE
window.addEventListener("load", getContent);
// LOAD INITIAL HOMEPAGE

window.addEventListener("hashchange", (e) => {
  getContent(e, location.hash.substring(1));
});
