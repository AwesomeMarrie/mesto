//import
import { FormValidator } from "./scripts/FormValidator.js";
import { Card } from "./scripts/Card.js";
import { initialCards } from "./scripts/cards.js";
import { PopupWithImage } from "./scripts/PopupWithImage.js";
import { PopupWithForm } from "./scripts/PopupWithForm.js";
import { Section } from "./scripts/Section.js";
import { UserInfo } from "./scripts/UserInfo.js";
import { config } from "./scripts/config.js";
import {
  buttonOpenPopupProfileEdit,
  buttonOpenPopupAddCard,
} from "./scripts/constants.js";
import "./pages/index.css";

const userInfo = new UserInfo({
  infoSelector: {
    name: ".profile__info-name",
    about: ".profile__info-about",
  },
});

const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup-edit",
  handleFormSubmit: (formData) => {
    popupEditProfile.addUserInfo(formData);
  },
});

const openBigImage = new PopupWithImage(".popup-location");

const firstCard = new Section(
  {
    items: initialCards,
    render: (item) => {
      const card = new Card(
        item,
        ".popup-location",
        openBigImage.open.bind(openBigImage)
      );
      const cardElement = card.generateCard();
      firstCard.addCard(cardElement);
    },
  },
  ".photo"
);

const cardAddPopup = new PopupWithForm({
  popupSelector: ".popup-photo",
  handleFormSubmit: (formData) => {
    const card = new Card(
      formData,
      ".popup-location",
      openBigImage.open.bind(openBigImage)
    );
    const cardElement = card.generateCard();
    firstCard.addCard(cardElement);
  },
});

firstCard.renderCard();

//open
buttonOpenPopupAddCard.addEventListener("click", () => {
  validatorFormTypeAdd.resetForm();
  validatorFormTypeAdd.initForm(false);
  cardAddPopup.open();
});

buttonOpenPopupProfileEdit.addEventListener("click", () => {
  validatorFormTypeEdit.resetForm();
  const info = userInfo.getUserInfo();
  popupEditProfile.form.querySelector(".popup__input-name").value = info.name;
  popupEditProfile.form.querySelector(".popup__input-title").value = info.about;
  popupEditProfile.open();
});

//close
popupEditProfile.setEventListeners();
cardAddPopup.setEventListeners();
openBigImage.setEventListeners();

const validatorFormTypeEdit = new FormValidator(config, popupEditProfile.form);
validatorFormTypeEdit.enableValidation();

const validatorFormTypeAdd = new FormValidator(config, cardAddPopup.form);
validatorFormTypeAdd.enableValidation();

// //const for popupp Edit
// const buttonOpenPopupProfileEdit = document.querySelector(
//   ".profile__info-button"
// );
// const formProfileEdit = document.querySelector(".popup__container-form");
// const buttonClosePopup = document.querySelector(".popup__close");
// const userName = document.querySelector(".profile__info-name");
// const userInfo = document.querySelector(".profile__info-about");
// const popupProfileEdit = document.querySelector(".popup-edit");
// const nameChange = document.querySelector(".popup__input-name");
// const infoChange = document.querySelector(".popup__input-title");
// //const for cards
// const containerCard = document.querySelector(".photo");
// export const popUpImageContainer = document.querySelector(".popup-location");
// export const popUpImage = document.querySelector(".popup-location__photo");
// export const popUpNameImage = document.querySelector(".popup-location__name");
// const popUpImageClose = document.querySelector(".popup-location__close");
// const name = document.querySelector(".popup-photo__input-place");
// const link = document.querySelector(".popup-photo__input-link");
// //const add Photo PopUp
// const buttonOpenPopupAddCard = document.querySelector(".profile__add");
// const formAddCard = document.querySelector(".popup-photo__container-form");
// const buttonClosePopupAddCard = document.querySelector(".popup-photo__close");
// const popupAddCard = document.querySelector(".popup-photo");
// //validation
// const config = {
//   formSelector: "popup__form",
//   inputSelector: "input",
//   submitButtonSelector: ".popup__save-edit",
//   inactiveButtonClass: "button__disabled",
//   inputErrorClass: "form__input-error",
//   errorClass: "form__input-error_active",
// };
// //open popup
// export function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupEscape);
//   popup.addEventListener("mousedown", closePopupOverlay);
// }
// //close popup
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupEscape);
//   popup.removeEventListener("mousedown", closePopupOverlay);
// }
// //close popup by esc
// const closePopupEscape = (evt) => {
//   if (evt.key === "Escape") {
//     const popupEsc = document.querySelector(".popup_opened");
//     closePopup(popupEsc);
//   }
// };
// //close popup by overlay
// function closePopupOverlay(evt) {
//   if (evt.target.classList.contains("popup")) {
//     closePopup(evt.target);
//   }
// }

// //function for opening popup edit and filling form
// function openPopupEditProfile() {
//   openPopup(popupProfileEdit);
//   nameChange.value = userName.textContent;
//   infoChange.value = userInfo.textContent;
// }

// //open popup edit by button
// buttonOpenPopupProfileEdit.addEventListener("click", openPopupEditProfile);

// //close popup edit by button
// buttonClosePopup.addEventListener("click", function () {
//   closePopup(popupProfileEdit);
// });

// //function for changing name and profession
// function handleProfileEditFormSubmit(evt) {
//   userName.textContent = nameChange.value;
//   userInfo.textContent = infoChange.value;
//   closePopup(popupProfileEdit);
//   evt.preventDefault();
//   validatorFormTypeEdit.disableButton();
// }

// //save change
// formProfileEdit.addEventListener("submit", handleProfileEditFormSubmit);

// //function for making new card
// function createCard(element) {
//   const card = new Card(element, "#card");
//   const cardElement = card.addCard();
//   return cardElement;
// }

// //close big image
// popUpImageClose.addEventListener("click", function () {
//   closePopup(popUpImageContainer);
// });

// //create card
// initialCards.forEach((element) => {
//   containerCard.append(createCard(element));
// });

// //function for saving new card
// function addNewPhoto(evt) {
//   closePopup(popupAddCard);
//   evt.preventDefault();
//   const newCard = createCard({ name: name.value, link: link.value });
//   containerCard.prepend(newCard);
//   name.value = "";
//   link.value = "";
//   validatorFormTypeAdd.disableButton();
// }

// formAddCard.addEventListener("submit", addNewPhoto);

// buttonOpenPopupAddCard.addEventListener("click", function openPhoto() {
//   openPopup(popupAddCard);
// });

// buttonClosePopupAddCard.addEventListener("click", function () {
//   closePopup(popupAddCard);
// });
