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
let nameInput = modalEditProfile.querySelector(".popup__input_type_name");
let descriptionInput = modalEditProfile.querySelector(
  ".popup__input_type_description",
);

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
}

buttonEditOpen.addEventListener("click", function () {
  handleOpenEditModal();
});

buttonEditClose.addEventListener("click", function () {
  closeModal(modalEditProfile);
});

formEditProfile.addEventListener("submit", function (evt) {
  handleProfileFormSubmit(evt);
  closeModal(modalEditProfile);
});
