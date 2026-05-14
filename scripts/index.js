import { Api } from "./Api.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithConfirmation } from "./PopupWithConfirmation.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "027fa34d-e16a-44db-8a3e-5a490b831bf8",
    "Content-Type": "application/json",
  },
});

const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
};

let currentUserId;

// Perfil
const titleProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const avatarProfile = document.querySelector(".profile__image");

// Botones del perfil
const buttonEditOpen = document.querySelector(".profile__edit-button");
const buttonAddOpen = document.querySelector(".profile__add-button");
const buttonAvatarEdit = document.querySelector(".profile__avatar-button");

// Formularios
const formEditProfile = document.querySelector("#edit-profile-form");
const formAddCard = document.querySelector("#new-card-form");
const formEditAvatar = document.querySelector("#edit-avatar-form");

// Campos del formulario de edición de perfil
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description",
);

// Contenedor de tarjetas
const listCard = document.querySelector(".cards__list");

// Popup para ver imagen grande (no cambió)
const popupImagen = new PopupWithImage("#image-popup");
popupImagen.setEventListeners();

// Popup para confirmar eliminación (NUEVO)
const popupConfirmar = new PopupWithConfirmation("#delete-popup");
popupConfirmar.setEventListeners();

// Popup para editar perfil
const popupEditProfile = new PopupWithForm("#edit-popup", {
  handleFormSubmit: (inputValues) => {
    popupEditProfile.renderIsLoading(true);

    api
      .updateUserInfo({
        name: inputValues.name,
        about: inputValues.description,
      })
      .then((updatedUser) => {
        titleProfile.textContent = updatedUser.name;
        descriptionProfile.textContent = updatedUser.about;
        popupEditProfile.close();
      })
      .catch((err) => {
        console.error("Error al actualizar el perfil:", err);
      })
      .finally(() => {
        popupEditProfile.renderIsLoading(false);
      });
  },
});
popupEditProfile.setEventListeners();

// Popup para agregar tarjeta
const popupAddCard = new PopupWithForm("#new-card-popup", {
  handleFormSubmit: (inputValues) => {
    popupAddCard.renderIsLoading(true);
    api
      .addCard({ name: inputValues.name, link: inputValues.link })
      .then((newCard) => {
        renderCard(newCard);
        popupAddCard.close();
      })
      .catch((err) => {
        console.error("Error al agregar la tarjeta:", err);
      })
      .finally(() => {
        popupAddCard.renderIsLoading(false);
      });
  },
});
popupAddCard.setEventListeners();

// Popup para editar la foto de perfil
const popupEditAvatar = new PopupWithForm("#edit-avatar-popup", {
  handleFormSubmit: (inputValues) => {
    popupEditAvatar.renderIsLoading(true);

    api
      .updateAvatar(inputValues.avatar)
      .then((updatedUser) => {
        avatarProfile.src = updatedUser.avatar;
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.error("Error al actualizar el avatar:", err);
      })
      .finally(() => {
        popupEditAvatar.renderIsLoading(false);
      });
  },
});
popupEditAvatar.setEventListeners();

// ── Validadores de formularios ───────────────────────────────
const editProfileValidator = new FormValidator(settings, formEditProfile);
const addCardValidator = new FormValidator(settings, formAddCard);

editProfileValidator.setEventListeners();
addCardValidator.setEventListeners();

// Solo si existe el formulario de avatar en el HTML, lo validamos
if (formEditAvatar) {
  const editAvatarValidator = new FormValidator(settings, formEditAvatar);
  editAvatarValidator.setEventListeners();
}

// ── Función para crear y mostrar una tarjeta ─────────────────
function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    popupImagen,
    (cardId, cardInstance) => {
      popupConfirmar.setAction(() => {
        api
          .deleteCard(cardId)
          .then(() => {
            cardInstance.removeCard();
            popupConfirmar.close();
          })
          .catch((err) => {
            console.error("Error al eliminar la tarjeta:", err);
          });
      });
      popupConfirmar.open();
    },

    (cardId, isLiked, cardInstance) => {
      const likePromise = isLiked
        ? api.unlikeCard(cardId)
        : api.likeCard(cardId);

      likePromise
        .then((updatedCard) => {
          cardInstance.toggleLike(updatedCard.isLiked);
        })
        .catch((err) => {
          console.error("Error al cambiar el me gusta:", err);
        });
    },

    currentUserId,
  );

  listCard.prepend(card.generateCard());
}

buttonEditOpen.addEventListener("click", () => {
  nameInput.value = titleProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  editProfileValidator.resetValidation(); //
  popupEditProfile.open();
});

buttonAddOpen.addEventListener("click", () => {
  addCardValidator.resetValidation();
  popupAddCard.open();
});

if (buttonAvatarEdit) {
  buttonAvatarEdit.addEventListener("click", () => {
    popupEditAvatar.open();
  });
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    currentUserId = userData._id;

    titleProfile.textContent = userData.name;
    descriptionProfile.textContent = userData.about;
    avatarProfile.src = userData.avatar;

    cardsData.reverse().forEach((cardData) => renderCard(cardData));
  })
  .catch((err) => {
    console.error("Error al cargar los datos iniciales:", err);
  });
