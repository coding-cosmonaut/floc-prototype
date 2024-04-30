import { render, timerID } from "./homepage";
import renderSignUp from "./signUpPage";
import { mainContent } from "./DOM";

const clear = function clearBothColumnsAndInterval() {
  mainContent.innerHTML = "";
  clearInterval(timerID);
};

function getContent(e, fragmentId) {
  console.log(fragmentId);
  if (fragmentId) {
    clear();
  }
  const pages = {
    home: render,
    // about: "blah",
    signUp: renderSignUp,
  };
  if (!fragmentId || fragmentId === "home") {
    pages.home();
  }

  if (fragmentId === "sign-up") {
    pages.signUp();
  }
}

export default getContent;
