export class Card {
  constructor(element, card, openBigImage) {
    this._name = element.name;
    this._link = element.link;
    this._card = card;
    this._openBigImage = openBigImage;
  }
  _getTamplate() {
    const elementCard = document
      .querySelector(this._card)
      .content.querySelector(".card")
      .cloneNode(true);
    return elementCard;
  }
  _openBigImage(element) {
    openPopup(popUpImageContainer);
    popUpImage.src = element.link;
    popUpNameImage.textContent = element.name;
    popUpImage.alt = element.name;
  }
  _activeLike() {
    this._buttonLike.classList.toggle("card__like-button_active");
  }
  _deleteCard() {
    this._cardElement.remove();
  }
  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._activeLike();
    });
    this._buttonDelete.addEventListener("click", () => {
      this._deleteCard();
    });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._openBigImage(this._name, this._link);
      });
  }

  addCard() {
    this._cardElement = this._getTamplate();
    this._cardTitle = this._cardElement.querySelector(
      ".card__tile-name"
    ).textContent = this._name;
    this._cardImage = this._cardElement.querySelector(".card__image").src =
      this._link;
    this._buttonDelete = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._buttonLike = this._cardElement.querySelector(".card__like-button");
    this._setEventListeners();
    return this._cardElement;
  }
}
