//popUpEdit
let openPopUp = document.querySelector(".profile__info-button");
let popUp = document.querySelector(".popup__container-form");
let closePopUp = document.querySelector(".popup__close");
let userName = document.querySelector(".profile__info-name");
let userInfo = document.querySelector(".profile__info-about");
let backGround = document.querySelector(".popup");
let nameChange = document.querySelector(".popup__input_name_change");
let infoChange = document.querySelector(".popup__input_about_change");

function open() {
  backGround.classList.add("popup_opened");
  nameChange.value = userName.textContent;
  infoChange.value = userInfo.textContent;
}

function close() {
  backGround.classList.remove("popup_opened");
}

openPopUp.addEventListener("click", open);

closePopUp.addEventListener("click", close);

function newName(evt) {
  userName.textContent = nameChange.value;
  userInfo.textContent = infoChange.value;
  close();
  evt.preventDefault();
}

popUp.addEventListener("submit", newName);

//cards
const containerCard = document.querySelector(".photo");
const templateCard = document.querySelector("#card").content;

const imageBackground = document.querySelector(
  ".popup-location__container-form"
);
const popUpImageContainer = document.querySelector(".popup-location");
const popUpImage = document.querySelector(".popup-location__photo");
const popUpNameImage = document.querySelector(".popup-location__name");
const popUpImageClose = document.querySelector(".popup-locaton__close");
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
  del.target.parentElement.remove();
}

function likeCard(like) {
  like.target.classList.toggle("card__like-button_active");
}

function newCard(element) {
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
  //BigImage
  const openContainerCard = editCard.querySelector(".card__image");
  function openBigImage() {
    popUpImageContainer.classList.add("popup_opened");
    popUpImage.src = element.link;
    popUpNameImage.textContent = element.name;
  }
  openContainerCard.addEventListener("click", openBigImage);

  function closePopUpImage() {
    popUpImageContainer.classList.remove("popup_opened");
  }
  popUpImageClose.addEventListener("click", closePopUpImage);

  return editCard;
}

initialCards.forEach((element) => {
  containerCard.append(newCard(element));
});
//addPhotoPopUp
let addPhoto = document.querySelector(".profile__add");
let popUpPhoto = document.querySelector(".popup-photo__container-form");
let closePopUpPhoto = document.querySelector(".popup-photo__close");
let backGroundPhoto = document.querySelector(".popup-photo");

function addCard(nameValue, linkValue) {
  const mainCard = document.createElement("article");
  mainCard.classList.add("card");
  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("card__delete-button", "button");
  buttonDelete.addEventListener("click", deleteCard);
  const imagePhoto = document.createElement("img");
  imagePhoto.classList.add("card__image");
  imagePhoto.src = linkValue;
  imagePhoto.addEventListener("click", openNewImage);
  const cardBottom = document.createElement("div");
  cardBottom.classList.add("card__tile");
  const likeButton = document.createElement("button");
  likeButton.classList.add("card__like-button", "button");
  likeButton.addEventListener("click", likeCard);
  const cardName = document.createElement("h2");
  cardName.classList.add("card__tile-name");
  cardName.textContent = nameValue;
  cardBottom.append(cardName, likeButton);
  mainCard.append(buttonDelete, imagePhoto, cardBottom);
  containerCard.prepend(mainCard);

  function openNewImage() {
    popUpImageContainer.classList.add("popup_opened");
    popUpImage.src = linkValue;
    popUpNameImage.textContent = nameValue;
  }
}

function newPhoto(evt) {
  closePhoto();
  evt.preventDefault();
  const name = document.querySelector(".popup-photo__input_name_change");
  const link = document.querySelector(".popup-photo__input_about_change");
  addCard(name.value, link.value);
  name.value = "";
  link.value = "";
}

function openBigContainer() {
  main.classList.add("popup_opened");
  popUpImage.src = element.link;
  popUpNameImage.textContent = element.name;
}
function openPhoto() {
  backGroundPhoto.classList.add("popup_opened");
}

function closePhoto() {
  backGroundPhoto.classList.remove("popup_opened");
}

addPhoto.addEventListener("click", openPhoto);

closePopUpPhoto.addEventListener("click", closePhoto);

popUpPhoto.addEventListener("submit", newPhoto);
