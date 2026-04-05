import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openModal, closeModal } from "./utils.js";

// Configuración de validación (se reutiliza para ambos formularios)
const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
};

// Tarjetas iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de los Glaciares",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//Selección de elementos del DOM
const modalEditProfile = document.querySelector("#edit-popup");
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonEditClose = modalEditProfile.querySelector(".popup__close");
const titleProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const formEditProfile = document.querySelector("#edit-profile-form");
const nameInput = modalEditProfile.querySelector(".popup__input_type_name");
const descriptionInput = modalEditProfile.querySelector(
  ".popup__input_type_description",
);

const modalAddCard = document.querySelector("#new-card-popup");
const buttonAddOpen = document.querySelector(".profile__add-button");
const buttonAddClose = modalAddCard.querySelector(".popup__close");
const cardNameInput = modalAddCard.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = modalAddCard.querySelector(".popup__input_type_url");
const formAddCard = modalAddCard.querySelector("#new-card-form");

const listCard = document.querySelector(".cards__list");

const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const popupImageClose = imagePopup.querySelector(".popup__close");

//Instancias de FormValidator
const editProfileValidator = new FormValidator(settings, formEditProfile);
const addCardValidator = new FormValidator(settings, formAddCard);
editProfileValidator.setEventListeners();
addCardValidator.setEventListeners();

function handleImageClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(imagePopup);
}

function renderCard(cardData, container) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  container.prepend(card.generateCard());
}

initialCards.forEach((cardData) => renderCard(cardData, listCard));

function fillProfileForm() {
  nameInput.value = titleProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closeModal(modalEditProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link }, listCard);
  formAddCard.reset();
  closeModal(modalAddCard);
}

//Event listeners
buttonEditOpen.addEventListener("click", () => {
  fillProfileForm();
  editProfileValidator.resetValidation();
  openModal(modalEditProfile);
});

buttonEditClose.addEventListener("click", () => closeModal(modalEditProfile));

buttonAddOpen.addEventListener("click", () => {
  addCardValidator.resetValidation();
  openModal(modalAddCard);
});

buttonAddClose.addEventListener("click", () => closeModal(modalAddCard));

popupImageClose.addEventListener("click", () => closeModal(imagePopup));

formEditProfile.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", handleCardFormSubmit);

imagePopup.addEventListener("click", (evt) => {
  if (evt.target === imagePopup) {
    closeModal(imagePopup);
  }
});
