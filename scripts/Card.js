export class Card {
  constructor(
    data,
    templateCard,
    popupImagen,
    handleDeleteClick,
    handleLikeClick,
    currentUserId,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._owner = data.owner;
    this._currentUserId = currentUserId;
    this._templateCard = templateCard;
    this._popup = popupImagen;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._name;

    if (this._isLiked) {
      this._element
        .querySelector(".card__like-button")
        .classList.add("card__like-button_is-active");
    }

    if (this._owner != this._currentUserId) {
      this._element.querySelector(".card__delete-button").style.display =
        "none";
    }

    this._setEventListeners();
    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick(this._id, this._isLiked, this);
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick(this._id, this);
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });
  }

  toggleLike(isLiked) {
    this._isLiked = isLiked;
    const likeButton = this._element.querySelector(".card__like-button");

    likeButton.classList.toggle("card__like-button_is-active", isLiked);
  }

  removeCard() {
    this._element.remove();
  }

  _handleCardClick() {
    this._popup.open(this._name, this._link);
  }
}
