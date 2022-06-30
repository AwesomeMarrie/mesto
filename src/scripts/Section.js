export class Section {
  constructor({ items, render }, selector) {
    this._renderCard = items;
    this._render = render;
    this._container = document.querySelector(selector);
  }
  renderCard() {
    this._renderCard.forEach((item) => this._render(item));
  }
  addCard(element) {
    this._container.prepend(element);
  }
}
