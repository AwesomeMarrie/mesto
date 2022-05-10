//popUpEdit
let openPopUp = document.querySelector('.profile__info-button');
let popUp = document.querySelector('.popup__container-form');
let closePopUp = document.querySelector('.popup__close');
let userName = document.querySelector('.profile__info-name');
let userInfo = document.querySelector('.profile__info-about');
let backGround = document.querySelector('.popup');
let nameChange = document.querySelector('.popup__input_name_change');
let infoChange = document.querySelector('.popup__input_about_change');

function open() {
    backGround.classList.add('popup_opened');
    nameChange.value = userName.textContent;
    infoChange.value = userInfo.textContent;
}
function close() {
    backGround.classList.remove('popup_opened');
}
openPopUp.addEventListener('click', open);
closePopUp.addEventListener('click', close);

function newName(evt) {
    userName.textContent = nameChange.value;
    userInfo.textContent = infoChange.value;
    close();
    evt.preventDefault();
}
popUp.addEventListener('submit', newName);

//cards
const containerCard = document.querySelector('.photo');
const templateCard = document.querySelector('#card').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialCards.forEach(function newCard(element) {
  const editCard = templateCard.cloneNode(true);
  editCard.querySelector('.card__tile-name').textContent = element.name;
  editCard.querySelector('.card__image').src = element.link;

  containerCard.append(editCard);
  return editCard
});
