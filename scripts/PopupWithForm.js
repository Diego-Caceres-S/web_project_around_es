import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".popup__input");
    const inputValues = {};
    this._inputList.forEach((input) => {
      if (input.classList.contains("popup__input_type_name")) {
        inputValues.name = input.value;
      } else if (input.classList.contains("popup__input_type_description")) {
        inputValues.description = input.value;
      } else if (input.classList.contains("popup__input_type_card-name")) {
        inputValues.name = input.value;
      } else if (input.classList.contains("popup__input_type_url")) {
        inputValues.link = input.value;
      }
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
