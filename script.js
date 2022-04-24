let openPopUp = document.querySelector('.info__user-button');
let popUp = document.querySelector('.popup__container');
let closePopUp = document.querySelector('.popup__close');
let savePopUp = document.querySelector('.popup__save');
let userName = document.querySelector('.info__user-name');
let userInfo = document.querySelector('.info__about');
let backGround = document.querySelector('.popup');


openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
   // popUp.classList.toggle('popup_opened');
    backGround.classList.toggle('popup_opened');
})
closePopUp.addEventListener('click', function(e) {
    e.preventDefault();
    //popUp.classList.toggle('popup_opened');
    backGround.classList.toggle('popup_opened');
})
function newName() {
    let nameChange = document.querySelector('.popup__name').value;
    userName.textContent = nameChange;
    let infoChange = document.querySelector('.popup__about').value;
    userInfo.textContent = infoChange;
    //popUp.classList.toggle('popup_opened');
    backGround.classList.toggle('popup_opened');
}
savePopUp.addEventListener('click', newName);
