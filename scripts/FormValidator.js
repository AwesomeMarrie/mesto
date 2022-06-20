export class FormValidator {
  constructor(configValidation, formElement) {
    this._formElement = formElement;
    this._configValidation = configValidation;
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
  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }
  enableValidation = () => {
    this._setEventListener();
  };

  _setEventListener() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
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
    if (this._hasInvalidInput()) {
      this.disableButton();
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(
        this._configValidation.inactiveButtonClass
      );
      this._buttonElement.removeAttribute("disabled", true);
    }
  };

  checkFormManual = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
}
