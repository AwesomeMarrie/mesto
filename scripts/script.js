//popUpEdit
const buttonOpenPopupProfileEdit = document.querySelector(
  ".profile__info-button"
);
const formProfileEdit = document.querySelector(".popup__container-form");
const buttonClosePopupProfileEdit = document.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const userInfo = document.querySelector(".profile__info-about");
const popupProfileEdit = document.querySelector(".popup");
const nameChange = document.querySelector(".popup__input_name_change");
const infoChange = document.querySelector(".popup__input_about_change");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopupEditProfile() {
  openPopup(popupProfileEdit);
  nameChange.value = userName.textContent;
  infoChange.value = userInfo.textContent;
}

buttonOpenPopupProfileEdit.addEventListener("click", openPopupEditProfile);

buttonClosePopupProfileEdit.addEventListener("click", function () {
  closePopup(popupProfileEdit);
});

function handleProfileEditFormSubmit(evt) {
  userName.textContent = nameChange.value;
  userInfo.textContent = infoChange.value;
  closePopup(popupProfileEdit);
  evt.preventDefault();
}

formProfileEdit.addEventListener("submit", handleProfileEditFormSubmit);

//cards
const containerCard = document.querySelector(".photo");
const templateCard = document.querySelector("#card").content;

const popUpImageContainer = document.querySelector(".popup-location");
const popUpImage = document.querySelector(".popup-location__photo");
const popUpNameImage = document.querySelector(".popup-location__name");
const popUpImageClose = document.querySelector(".popup-location__close");

function deleteCard(del) {
  del.target.closest(".card").remove();
}

function likeCard(like) {
  like.target.classList.toggle("card__like-button_active");
}

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
  //открытие карточки
  const openContainerCard = editCard.querySelector(".card__image");
  function openBigImage() {
    openPopup(popUpImageContainer);
    popUpImage.src = element.link;
    popUpNameImage.textContent = element.name;
    popUpImage.alt = element.name;
  }
  openContainerCard.addEventListener("click", openBigImage);

  return editCard;
}
popUpImageClose.addEventListener("click", function () {
  closePopup(popUpImageContainer);
});

initialCards.forEach((element) => {
  containerCard.append(createCard(element));
});
//addPhotoPopUp
const buttonOpenPopupAddCard = document.querySelector(".profile__add");
const formAddCard = document.querySelector(".popup-photo__container-form");
const buttonClosePopupAddCard = document.querySelector(".popup-photo__close");
const popupAddCard = document.querySelector(".popup-photo");

function addNewPhoto(evt) {
  closePopup(popupAddCard);
  evt.preventDefault();
  const name = document.querySelector(".popup-photo__input_name_change");
  const link = document.querySelector(".popup-photo__input_about_change");
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
