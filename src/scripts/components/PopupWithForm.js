import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector("form");
    this._inputList = Array.from(this._formElement.querySelectorAll("input"));
    this._handleSubmit = handleSubmit;
  }

  _getInputsValue() {
    this._inputsValue = {};
    this._inputList.forEach(
      (input) => (this._inputsValue[input.name] = input.value)
    );
    return this._inputsValue;
  }

  setInputValue(inputElementName, inputElementValue) {
    this._inputList.forEach((input) => {
      if (input.name === inputElementName) {
        input.value = inputElementValue;
      }
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputsValue());
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }
}
