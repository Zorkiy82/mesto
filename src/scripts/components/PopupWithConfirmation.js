import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._submitButton = this._popupElement.querySelector(
      ".pop-up__submit-button"
    );
  }
  setButtonText(text) {
    this._submitButton.textContent = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", () => {
      this._handleSubmit();
    });
  }
}
