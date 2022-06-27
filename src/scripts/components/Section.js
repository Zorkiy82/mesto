export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  reverseRenderItems(items) {
    for (let i = items.length - 1; i >= 0; --i) {
      this._renderer(items[i]);
    }
  }
}
