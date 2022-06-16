import {
  openPopup,
  popUpImage,
  popUpNameImage,
  popUpImageContainer,
} from "./script.js";

export class Card {
  constructor(element, card, openBigImage) {
    this._name = element.name;
    this._link = element.link;
    this._card = card;
  }

  _getTemplate() {
    const elementCard = document
      .querySelector(this._card)
      .content.querySelector(".card")
      .cloneNode(true);
    return elementCard;
  }

  _openBigImage() {
    openPopup(popUpImageContainer);
    popUpImage.src = this._link;
    popUpNameImage.textContent = this._name;
    popUpImage.alt = this._name;
  }

  _activeLike() {
    this._likeButton.classList.toggle("card__like-button_active");
  }
  _deleteCard() {
    this._elementCard.remove();
  }
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._activeLike();
    });
    this._buttonDelete.addEventListener("click", () => {
      this._deleteCard();
    });
    this._elementCard
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._openBigImage();
      });
  }

  addCard() {
    this._elementCard = this._getTemplate();
    this._cardTitle = this._elementCard.querySelector(
      ".card__tile-name"
    ).textContent = this._name;
    this._cardImage = this._elementCard.querySelector(".card__image").src =
      this._link;
    this._buttonDelete = this._elementCard.querySelector(
      ".card__delete-button"
    );
    this._likeButton = this._elementCard.querySelector(".card__like-button");
    this._setEventListeners();
    return this._elementCard;
  }
}
