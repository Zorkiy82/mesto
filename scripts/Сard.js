const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const imagePopUp = document.querySelector(".pop-up_for-image");
const imagePopUpImage = imagePopUp.querySelector(".pop-up__image");
const imagePopUpTitel = imagePopUp.querySelector(".pop-up__image-title");

class Card {
  constructor(cardData, cardTemplateSelector) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._like = false;
  }

  _getTemplate() {
    return document.querySelector(this._cardTemplateSelector);
  }

  _handleLike() {
    this._elementLikeButton.classList.toggle("card__like_is-active");
    this._like = !this._like;
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _openPopUp() {
    window.addEventListener("keydown", this._keydownHeandler);
    imagePopUp.classList.add("popup_opened");
  }

  _keydownHeandler(evt) {
    if (evt.key === "Escape") {
      window.removeEventListener("keydown", this._keydownHeandler);
      imagePopUp.classList.remove("popup_opened");
    }
  }

  _imagePopUpHandler() {
    imagePopUpImage.src = this._link;
    imagePopUpTitel.textContent = this._title;

    this._openPopUp();
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener("click", () => {
      this._handleLike();
    });
    this._elementDeleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });
    this._elmentImage.addEventListener("click", () => {
      this._imagePopUpHandler();
    });
    imagePopUp.addEventListener("mousedown", (evt) => {
      const targetClassList = evt.target.classList;

      if (
        targetClassList.contains("pop-up") ||
        targetClassList.contains("pop-up__close-button")
      ) {
        imagePopUp.classList.remove("popup_opened");
      }
    });
  }

  createCard() {
    this._element = this._getTemplate()
      .content.querySelector(".card")
      .cloneNode(true);
    this._elmentImage = this._element.querySelector(".card__image");
    this._elementTitel = this._element.querySelector(".card__title");
    this._elementLikeButton = this._element.querySelector(".card__like");
    this._elementDeleteButton = this._element.querySelector(
      ".card__delete-button"
    );

    this._elmentImage.src = this._link;
    this._elmentImage.alt = this._title;
    this._elementTitel.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

export { initialCards, Card };
