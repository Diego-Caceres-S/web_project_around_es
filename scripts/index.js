import { FormValidator } from "./FormValidator.js";
import { openModal, closeModal } from "./utils.js";
import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

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

const popupConImagen = new PopupWithImage("#image-popup");
popupConImagen.setEventListeners();

//Instancias de FormValidator
const editProfileValidator = new FormValidator(settings, formEditProfile);
const addCardValidator = new FormValidator(settings, formAddCard);
editProfileValidator.setEventListeners();
addCardValidator.setEventListeners();

function renderCard(cardData, container) {
  const card = new Card(cardData, "#card-template", popupConImagen);
  container.prepend(card.generateCard());
}

initialCards.forEach((cardData) => renderCard(cardData, listCard));

function fillProfileForm() {
  nameInput.value = titleProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
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

const popupEditProfile = new PopupWithForm("#edit-popup", {
  handleFormSubmit: (inputValues) => {
    titleProfile.textContent = inputValues.name;
    descriptionProfile.textContent = inputValues.description;
    popupEditProfile.close();
  },
});

popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm("#new-card-popup", {
  handleFormSubmit: (inputValues) => {
    renderCard(inputValues, listCard);
    popupAddCard.close();
  },
});
popupAddCard.setEventListeners();
