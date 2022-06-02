//const for popupp Edit
const buttonOpenPopupProfileEdit = document.querySelector(
  ".profile__info-button"
);
const formProfileEdit = document.querySelector(".popup__container-form");
const buttonClosePopup = document.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const userInfo = document.querySelector(".profile__info-about");
const popupProfileEdit = document.querySelector(".popup");
const nameChange = document.querySelector(".form__input_name");
const infoChange = document.querySelector(".form__input_title");

//open popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  document.addEventListener("mousedown", closePopupOverlay);
}

//close popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
  popup.removeEventListener("mousedown", closePopupOverlay);
}

//close popup by esc
const closePopupEscape = (evt) => {
  if (evt.key === "Escape") {
    const popupEsc = document.querySelector(".popup_opened");
    closePopup(popupEsc);
  }
};

//close popup by overlay
function closePopupOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}
//function for opening popup edit and filling form
function openPopupEditProfile() {
  openPopup(popupProfileEdit);
  nameChange.value = userName.textContent;
  infoChange.value = userInfo.textContent;
}

//open popup edit by button
buttonOpenPopupProfileEdit.addEventListener("click", openPopupEditProfile);

//close popup edit by button
buttonClosePopup.addEventListener("click", function () {
  closePopup(popupProfileEdit);
});

//function for changing name and profession
function handleProfileEditFormSubmit(evt) {
  userName.textContent = nameChange.value;
  userInfo.textContent = infoChange.value;
  closePopup(popupProfileEdit);
  evt.preventDefault();
}

//save change
formProfileEdit.addEventListener("submit", handleProfileEditFormSubmit);

//const for cards
const containerCard = document.querySelector(".photo");
const templateCard = document.querySelector("#card").content;

const popUpImageContainer = document.querySelector(".popup-location");
const popUpImage = document.querySelector(".popup-location__photo");
const popUpNameImage = document.querySelector(".popup-location__name");
const popUpImageClose = document.querySelector(".popup-location__close");

//function for deleting card
function deleteCard(del) {
  del.target.closest(".card").remove();
}

//function for clicking on like
function likeCard(like) {
  like.target.classList.toggle("card__like-button_active");
}

//function for making new card
function createCard(element) {
  //photo and name
  const editCard = templateCard.cloneNode(true);
  const imageCard = editCard.querySelector(".card__image");
  editCard.querySelector(".card__tile-name").textContent = element.name;
  imageCard.src = element.link;
  imageCard.alt = element.name;
  //like
  const buttonLike = editCard.querySelector(".card__like-button");
  buttonLike.addEventListener("click", likeCard);
  //delete
  const buttonDelete = editCard.querySelector(".card__delete-button");
  buttonDelete.addEventListener("click", deleteCard);
  //open card. big photo
  const cardElement = imageCard;
  function openBigImage(element) {
    openPopup(popUpImageContainer);
    popUpImage.src = element.link;
    popUpNameImage.textContent = element.name;
    popUpImage.alt = element.name;
  }
  //open card by click on card
  cardElement.addEventListener("click", () => openBigImage(element));

  return editCard;
}

//close big image
popUpImageClose.addEventListener("click", function () {
  closePopup(popUpImageContainer);
});

//create card
initialCards.forEach((element) => {
  containerCard.append(createCard(element));
});
//const add Photo PopUp
const buttonOpenPopupAddCard = document.querySelector(".profile__add");
const formAddCard = document.querySelector(".popup-photo__container-form");
const buttonClosePopupAddCard = document.querySelector(".popup-photo__close");
const popupAddCard = document.querySelector(".popup-photo");

//function for saving new card
function addNewPhoto(evt) {
  closePopup(popupAddCard);
  evt.preventDefault();
  const name = document.querySelector(".form__photo-name");
  const link = document.querySelector(".form__photo-title");
  const newCard = createCard({ name: name.value, link: link.value });
  containerCard.prepend(newCard);
  name.value = "";
  link.value = "";
}

formAddCard.addEventListener("submit", addNewPhoto);
buttonOpenPopupAddCard.addEventListener("click", function openPhoto() {
  openPopup(popupAddCard);
});

buttonClosePopupAddCard.addEventListener("click", function () {
  closePopup(popupAddCard);
});
