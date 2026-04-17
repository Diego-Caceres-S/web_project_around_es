export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._isMouseDownOnOverlay = false;
  }

  open() {
    this._popup.classList.add("popup_is-opened");
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(".popup__close").addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });

    this._popup.addEventListener("mousedown", (evt) => {
      this._isMouseDownOnOverlay = evt.target === this._popup;
    });

    this._popup.addEventListener("click", (evt) => {
      if (evt.target === this._popup && this._isMouseDownOnOverlay) {
        this.close();
      }
    });
  }
}
