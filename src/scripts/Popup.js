export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", (event) => this._closeEsc(event));
  }
  _closeEsc(event) {
    if (event.key === "Escape") {
      this._close();
    }
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (event) => this._closeEsc(event));
  }
  _closeOverlayAndButton(event) {
    if (
      event.target.classList.contains("popup") ||
      event.target.classList.contains("popup__close")
    ) {
      this.close();
    }
  }
  setEventListeners() {
    this._popup.addEventListener("click", (event) =>
      this._closeOverlayAndButton(event)
    );
  }
}
