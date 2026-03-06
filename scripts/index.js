console.log("Hello, World!");
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

initialCards.forEach(function (element) {
  console.log(element.name + ".");
});

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
const buttonAddClose = modalAddCard.querySelector(".popup__close");
const cardNameInput = modalAddCard.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = modalAddCard.querySelector(".popup__input_type_url");
const formAddCard = modalAddCard.querySelector("#new-card-form");
const buttonAddOpen = document.querySelector(".profile__add-button");
const listCard = document.querySelector(".cards__list");
const templateCard = document.querySelector("#card-template").content;
const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");
const popupImageClose = imagePopup.querySelector(".popup__close");

function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = templateCard.cloneNode(true).firstElementChild;
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = name;
  cardTitle.alt = name;
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener("click", function () {
    popupCaption.textContent = name;
    popupImage.src = link;
    popupImage.alt = name;
    openModal(imagePopup);
  });
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("card__like-button_is-active");
  });
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      cardElement.remove();
    });

  return cardElement;
}

function renderCard(name, link, container) {
  const newCard = getCardElement(name, link);
  container.prepend(newCard);
}

initialCards.forEach(function (element) {
  renderCard(element.name, element.link, listCard);
});

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = titleProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(modalEditProfile);
}

buttonAddOpen.addEventListener("click", function () {
  openModal(modalAddCard);
  console.log("Abriendo modal de agregar tarjeta.");
});

buttonEditOpen.addEventListener("click", function () {
  handleOpenEditModal();
});

buttonEditClose.addEventListener("click", function () {
  closeModal(modalEditProfile);
});

buttonAddClose.addEventListener("click", function () {
  closeModal(modalAddCard);
});

popupImageClose.addEventListener("click", function () {
  closeModal(imagePopup);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  renderCard(name, link, listCard);
}

formEditProfile.addEventListener("submit", function (evt) {
  handleProfileFormSubmit(evt);
  closeModal(modalEditProfile);
});

formAddCard.addEventListener("submit", function (evt) {
  handleCardFormSubmit(evt);
  closeModal(modalAddCard);
});
