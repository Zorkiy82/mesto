import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupElementImage = this._popupElement.querySelector("img");
    this._popupElementTitel = this._popupElement.querySelector("p");
  }

  open({ link, title }) {
    this._popupElementImage.src = link;
    this._popupElementImage.alt = title;
    this._popupElementTitel.textContent = title;
    super.open();
  }
}
