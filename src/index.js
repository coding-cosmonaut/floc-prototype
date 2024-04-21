import "./style.css";
import { hamburger, mobileNav } from "./DOM";
import toggle from "./mobileNavigation";

hamburger.addEventListener("click", () => {
  toggle(hamburger.firstElementChild, "line1");
  toggle(hamburger.lastElementChild, "line2");
  toggle(mobileNav, "mobile-nav-open");
});
