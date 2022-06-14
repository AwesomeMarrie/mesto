export class FormValidator {
  constructor(configValidation, formElement) {
    this._formElement = formElement;
    this._inputSelector = configValidation.inputSelector;
    this._submitButtonSelector = configValidation.submitButtonSelector;
    this._inactiveButtonClass = configValidation.inactiveButtonClass;
    this._inputErrorClass = configValidation.inputErrorClass;
    this._errorClass = configValidation.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListener();
  }

  _setEventListener() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList);
      });
    });
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "");
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  };

  checkFormManual = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
}

// const showInputError = (
//   formElement,
//   inputElement,
//   errorMessage,
//   inputErrorModifier,
//   errorSelector
// ) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorModifier);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorSelector);
// };

// const hideInputError = (
//   formElement,
//   inputElement,
//   inputErrorModifier,
//   errorSelector
// ) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorModifier);
//   errorElement.classList.remove(errorSelector);
//   errorElement.textContent = "";
// };

// const checkInputValidity = (
//   formElement,
//   inputElement,
//   inputErrorModifier,
//   errorSelector
// ) => {
//   if (!inputElement.validity.valid) {
//     showInputError(
//       formElement,
//       inputElement,
//       inputElement.validationMessage,
//       inputErrorModifier,
//       errorSelector
//     );
//   } else {
//     hideInputError(
//       formElement,
//       inputElement,
//       inputErrorModifier,
//       errorSelector
//     );
//   }
// };

// const setListeners = (formElement, validElement) => {
//   const {
//     inputSelector,
//     submitButtonSelector,
//     errorClass,
//     inputErrorClass,
//     inactiveButtonClass,
//   } = validElement;
//   const inputList = Array.from(
//     formElement.querySelectorAll(`.${inputSelector}`)
//   );
//   const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);
//   toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(
//         formElement,
//         inputElement,
//         inputErrorClass,
//         errorClass
//       );
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//     });
//   });
// };

// const enableValidation = (configValidation) => {
//   const { formSelector } = configValidation;
//   const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
//   formList.forEach((formElement) => {
//     setListeners(formElement, configValidation);
//   });
// };

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// function toggleButtonState(inputList, buttonElement, disabledSelector) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(disabledSelector);
//     buttonElement.setAttribute("disabled", true);
//   } else {
//     buttonElement.classList.remove(disabledSelector);
//     buttonElement.removeAttribute("disabled", false);
//   }
// }
// enableValidation(config);
