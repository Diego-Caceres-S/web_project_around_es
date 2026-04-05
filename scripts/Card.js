export class Card {
  constructor(data, templateCard, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateCard = templateCard;
    this._handleImageClick = handleImageClick;
  }

  // Metodo para clonar la plantilla
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  // Metodo para cambiar de estado el boton de "Me Gusta"
  _handleLikeClick() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  // Metodo para eliminar una card
  _handleRemoveCard() {
    this._element.remove();
  }

  // Metodo agrega todos los detectores de eventos
  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleRemoveCard();
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this._name, this._link);
      });
  }

  // Metodo que devuelve el elemento card para insertar en el DOM
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
