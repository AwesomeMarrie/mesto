const config = {
  formSelector: "popup__form",
  inputSelector: "input",
  submitButtonSelector: "popup__save-edit",
  inactiveButtonClass: "button__disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active",
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorModifier,
  errorSelector
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorModifier);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSelector);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorModifier,
  errorSelector
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorModifier);
  errorElement.classList.remove(errorSelector);
  errorElement.textContent = "";
};

const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorModifier,
  errorSelector
) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorModifier,
      errorSelector
    );
  } else {
    hideInputError(
      formElement,
      inputElement,
      inputErrorModifier,
      errorSelector
    );
  }
};

const setListeners = (formElement, validElement) => {
  const {
    inputSelector,
    submitButtonSelector,
    errorClass,
    inputErrorClass,
    inactiveButtonClass,
  } = validElement;
  const inputList = Array.from(
    formElement.querySelectorAll(`.${inputSelector}`)
  );
  const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const enableValidation = (configValidation) => {
  const { formSelector } = configValidation;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    setListeners(formElement, configValidation);
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, disabledSelector) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(disabledSelector);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(disabledSelector);
    buttonElement.removeAttribute("disabled", false);
  }
}
enableValidation(config);
