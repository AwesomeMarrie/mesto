//const for popupp Edit
const buttonOpenPopupProfileEdit = document.querySelector(
  ".profile__info-button"
);
const formProfileEdit = document.querySelector(".popup__container-form");
const buttonClosePopupProfileEdit = document.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const userInfo = document.querySelector(".profile__info-about");
const popupProfileEdit = document.querySelector(".popup");
const nameChange = document.querySelector(".popup__input_name");
const infoChange = document.querySelector(".popup__input_title");

//open popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEscape);
  document.addEventListener("mousedown", closePopupOverlay);
  saveButtonEdit.classList.add("button__disabled");
  saveButtonPlace.classList.add("button__disabled");
}

//close by button
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEscape);
  document.removeEventListener("mousedown", closePopupOverlay);
}

//close popup by esc
const closePopupEscape = (evt) => {
  if (evt.key === "Escape") {
    const popupEsc = document.querySelector(".popup_opened");
    closePopup(popupEsc);
  }
};

//close popup by overlay
const closePopupOverlay = (event) => {
  if (event.target.classList.contains("card")) {
    const popupOverlay = document.querySelector(".popup_opened");
    closePopup(popupOverlay);
  }
  if (event.target.classList.contains("popup")) {
    const popupOverlay = document.querySelector(".popup_opened");
    closePopup(popupOverlay);
  }
  if (event.target.classList.contains("popup-photo")) {
    const popupOverlay = document.querySelector(".popup_opened");
    closePopup(popupOverlay);
  }
  if (event.target.classList.contains("popup-location")) {
    const popupOverlay = document.querySelector(".popup_opened");
    closePopup(popupOverlay);
  }
};

//function for opening popup edit and filling form
function openPopupEditProfile() {
  openPopup(popupProfileEdit);
  nameChange.value = userName.textContent;
  infoChange.value = userInfo.textContent;
}

//open popup edit by button
buttonOpenPopupProfileEdit.addEventListener("click", openPopupEditProfile);

//close popup edit by button
buttonClosePopupProfileEdit.addEventListener("click", function () {
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
  editCard.querySelector(".card__tile-name").textContent = element.name;
  editCard.querySelector(".card__image").src = element.link;
  editCard.querySelector(".card__image").alt = element.name;
  //like
  const likeButton = editCard.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeCard);
  //delete
  const delteButton = editCard.querySelector(".card__delete-button");
  delteButton.addEventListener("click", deleteCard);
  //open card. big photo
  const openContainerCard = editCard.querySelector(".card__image");
  function openBigImage() {
    openPopup(popUpImageContainer);
    popUpImage.src = element.link;
    popUpNameImage.textContent = element.name;
    popUpImage.alt = element.name;
  }
  //open card by click on card
  openContainerCard.addEventListener("click", openBigImage);

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
  const name = document.querySelector(".popup__input_name");
  const link = document.querySelector(".popup__input_title");
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
