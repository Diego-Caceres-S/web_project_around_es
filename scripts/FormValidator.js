export class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`,
    );
    if (!inputElement.validity.valid) {
      errorElement.textContent = inputElement.validationMessage;
    } else {
      errorElement.textContent = "";
    }
  }

  _toggleButtonState() {
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector),
    );
    const isFormValid = inputs.every((input) => input.validity.valid);
    const button = this._formElement.querySelector(this._submitButtonSelector);
    button.disabled = !isFormValid;
    if (isFormValid) {
      button.classList.remove(this._inactiveButtonClass);
    } else {
      button.classList.add(this._inactiveButtonClass);
    }
  }

  _setInputListeners() {
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector),
    );
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector),
    );
    inputs.forEach((input) => {
      const errorElement = this._formElement.querySelector(
        `#${input.id}-error`,
      );
      errorElement.textContent = "";
    });
    this._toggleButtonState();
  }

  setEventListeners() {
    this._setInputListeners();
    this._toggleButtonState();
  }
}
