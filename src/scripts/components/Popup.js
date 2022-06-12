export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeMetod = this._handleEscClose.bind(this);
  }

  open() {
    const handleEsc = this._closeMetod;
    window.addEventListener("keydown", handleEsc);
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    const handleEsc = this._closeMetod;
    window.removeEventListener("keydown", handleEsc);
    this._popupElement.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      const targetClassList = evt.target.classList;

      if (
        targetClassList.contains("pop-up") ||
        targetClassList.contains("pop-up__close-button")
      ) {
        this.close();
      }
    });
  }
}
