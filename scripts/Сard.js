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

class Card {
  constructor(cardData, cardTemplateSelector, handleElementImageClick) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleElementImageClick = handleElementImageClick;
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

  _setEventListeners() {
    this._elementLikeButton.addEventListener("click", () => {
      this._handleLike();
    });
    this._elementDeleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });
    this._elmentImage.addEventListener("click", () => {
      this._handleElementImageClick(this._link, this._title);
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
