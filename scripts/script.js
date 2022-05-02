let openPopUp = document.querySelector('.profile__info-button');
let popUp = document.querySelector('.popup__container-form');
let closePopUp = document.querySelector('.popup__close');
let userName = document.querySelector('.profile__info-name');
let userInfo = document.querySelector('.profile__info-about');
let backGround = document.querySelector('.popup');
let nameChange = document.querySelector('.popup__input_name_change');
let infoChange = document.querySelector('.popup__input_about_change');

function open(event) {
    backGround.classList.add('popup_opened');
    nameChange.value = userName.textContent;
    infoChange.value = userInfo.textContent;
    event.preventDefault();
}
function close() {
    backGround.classList.remove('popup_opened');
}
openPopUp.addEventListener('click', open);
closePopUp.addEventListener('click', close);

function newName(evt) {
    userName.textContent = nameChange.value;
    userInfo.textContent = infoChange.value;
    evt.preventDefault();
}
popUp.addEventListener('submit', newName);
popUp.addEventListener('submit', close);
