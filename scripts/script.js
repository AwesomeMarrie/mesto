//popUpEdit
const openPopUp = document.querySelector(".profile__info-button");
const popUpForm = document.querySelector(".popup__container-form");
const closePopUp = document.querySelector(".popup__close");
const userName = document.querySelector(".profile__info-name");
const userInfo = document.querySelector(".profile__info-about");
const popUp = document.querySelector(".popup");
const nameChange = document.querySelector(".popup__input_name_change");
const infoChange = document.querySelector(".popup__input_about_change");

function openPopUpForm(popup) {
  popup.classList.add("popup_opened");
}
function closePopUpForm(popup) {
  popup.classList.remove("popup_opened");
}

function open() {
  openPopUpForm(popUp);
  nameChange.value = userName.textContent;
  infoChange.value = userInfo.textContent;
}

openPopUp.addEventListener("click", open);

closePopUp.addEventListener("click", function () {
  closePopUpForm(popUp);
});

function createNewName(evt) {
  userName.textContent = nameChange.value;
  userInfo.textContent = infoChange.value;
  closePopUpForm(popUp);
  evt.preventDefault();
}

popUpForm.addEventListener("submit", createNewName);

//cards
const containerCard = document.querySelector(".photo");
const templateCard = document.querySelector("#card").content;

const popUpImageContainer = document.querySelector(".popup-location");
const popUpImage = document.querySelector(".popup-location__photo");
const popUpNameImage = document.querySelector(".popup-location__name");
const popUpImageClose = document.querySelector(".popup-location__close");
const deleteButton = document.querySelector(".card__delete-button");
//cardMassive
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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
  //like
  const likeButton = editCard.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeCard);
  //delete
  const delteButton = editCard.querySelector(".card__delete-button");
  delteButton.addEventListener("click", deleteCard);
  //открытие карточки
  const openContainerCard = editCard.querySelector(".card__image");
  function openBigImage() {
    openPopUpForm(popUpImageContainer);
    popUpImage.src = element.link;
    popUpNameImage.textContent = element.name;
  }
  openContainerCard.addEventListener("click", openBigImage);

  return editCard;
}
popUpImageClose.addEventListener("click", function () {
  closePopUpForm(popUpImageContainer);
});

initialCards.forEach((element) => {
  containerCard.append(createCard(element));
});
//addPhotoPopUp
const addNewCard = document.querySelector(".profile__add");
const newCardPopUp = document.querySelector(".popup-photo__container-form");
const closeNewPopUp = document.querySelector(".popup-photo__close");
const popUpFormPhoto = document.querySelector(".popup-photo");

function addNewPhoto(evt) {
  closePopUpForm(popUpFormPhoto);
  evt.preventDefault();
  const name = document.querySelector(".popup-photo__input_name_change");
  const link = document.querySelector(".popup-photo__input_about_change");
  const newCard = createCard({ name: name.value, link: link.value });
  containerCard.prepend(newCard);
  name.value = "";
  link.value = "";
}

newCardPopUp.addEventListener("submit", addNewPhoto);
addNewCard.addEventListener("click", function openPhoto() {
  openPopUpForm(popUpFormPhoto);
});

closeNewPopUp.addEventListener("click", function () {
  closePopUpForm(popUpFormPhoto);
});
