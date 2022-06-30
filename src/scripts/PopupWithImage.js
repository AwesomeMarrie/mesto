import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup-location__photo");
    this._name = this._popup.querySelector(".popup-location__name");
  }
  open(data) {
    this._image.src = data.link;
    this._image.alt = data.description ? data.description : data.title;
    this._name.textContent = data.title;
    super.open();
  }
}
