let openPopUp = document.querySelector('.profile__info-user_button');
let popUp = document.querySelector('.popup__container');
let closePopUp = document.querySelector('.popup__close');
let userName = document.querySelector('.profile__info-user_name');
let userInfo = document.querySelector('.profile__info-about');
let backGround = document.querySelector('.popup');
let nameChange = document.querySelector('.popup__input_name');
let infoChange = document.querySelector('.popup__input_about');

function open() {
    if (backGround.classList.contains('popup_opened')) {
        backGround.classList.remove('popup_opened');
    }else {
        backGround.classList.add('popup_opened');
    }
}

openPopUp.addEventListener('click', open);
closePopUp.addEventListener('click', open);

function newName(evt) {
    userName.textContent = nameChange.value;
    userInfo.textContent = infoChange.value;
    backGround.classList.remove('popup_opened');
    evt.preventDefault();
}
popUp.addEventListener('submit', newName);
