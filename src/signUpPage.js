import "./signUpPage.css";
import { create, mainContent } from "./DOM";

const leftSignUp = function leftSignUpColumnContent() {
  // ELEMENTS
  const wrapperLeft = create("section");
  const container = create("div");
  const img = create("img");
  // ELEMENTS

  // CLASSES
  wrapperLeft.setAttribute("class", "wrapper-left-sign-up-section");
  container.setAttribute("class", "sign-up-img-container slide-up-animation");
  img.setAttribute("class", "left-image");
  // CLASSES
  container.append(img);
  wrapperLeft.append(container);
  mainContent.append(wrapperLeft);
};

const createInput = function createInputContainers(
  labelFor,
  inputType,
  spanText
) {
  const inputContainer = create("div");
  for (let i = 0; i < 1; i++) {
    const input = create("input");
    const label = create("label");
    const span = create("span");

    inputContainer.setAttribute("class", "input-container");

    span.textContent = spanText;

    label.setAttribute("for", labelFor);

    input.setAttribute("type", inputType);
    input.setAttribute("name", labelFor);
    input.setAttribute("id", labelFor);
    input.setAttribute("required", "");

    inputContainer.append(label, input, span);
  }
  return inputContainer;
};

const rightSignUp = function leftSignUpColumnContent() {
  // ELEMENTS
  const wrapperRight = create("section");
  const form = create("form");
  const formContainer = create("div");
  const headingH1 = create("h1");
  const submitBttn = create("button");
  const buttonContainer = create("div");

  const inputContaineOne = createInput("firstName", "text", "first name");
  const inputContaineTwo = createInput("lastName", "text", "last name");
  const inputContaineThree = createInput("email", "email", "email");
  // ELEMENTS

  // CLASSES
  wrapperRight.setAttribute("class", "wrapper-right-sign-up-section");
  formContainer.setAttribute("class", "form-container");
  submitBttn.setAttribute("class", "submit-button");
  // form.setAttribute("class", "left-image");
  // CLASSES

  // HEADING
  headingH1.textContent = "Sign-up now for beta testing!";
  // HEADING

  // BUTTON
  submitBttn.textContent = "Sign-up!";
  submitBttn.setAttribute("type", "submit");
  // BUTTON

  buttonContainer.append(submitBttn);

  formContainer.append(
    headingH1,
    inputContaineOne,
    inputContaineTwo,
    inputContaineThree
  );
  form.append(formContainer, buttonContainer);

  wrapperRight.append(form);
  mainContent.appendChild(wrapperRight);
};

const renderSignUp = function renderSignUpPage() {
  leftSignUp();
  rightSignUp();
};

export default renderSignUp;

// rashidbabaev@hotmail.red
