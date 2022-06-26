export class Card {
  constructor(
    cardData,
    cardTemplateSelector,
    handleElementImageClick,
    curentUserId,
    handleDeleteCardButton
  ) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleElementImageClick = handleElementImageClick;
    this._like = false;
    this._likesCounter = cardData.likes.length;
    this._isCurentUserCard = curentUserId === cardData.owner._id;
    this._handleDeleteButton = handleDeleteCardButton;
  }

  _getTemplate() {
    return document.querySelector(this._cardTemplateSelector);
  }

  _handleLike() {
    this._elementLikeButton.classList.toggle("card__like_is-active");
    this._like = !this._like;
  }

  deleteElementCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener("click", () => {
      this._handleLike();
    });
    if (this._isCurentUserCard) {
      this._elementDeleteButton.addEventListener("click", () => {
        this._handleDeleteButton(this);
      });
    }
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
    if (!this._isCurentUserCard) {
      this._elementDeleteButton.remove();
    }

    this.elementLikesCounter = this._element.querySelector(
      ".card__likes-counter"
    );
    this._element.id = this._id;
    this._elmentImage.src = this._link;
    this._elmentImage.alt = this._title;
    this._elementTitel.textContent = this._title;
    this.elementLikesCounter.textContent = this._likesCounter;

    this._setEventListeners();

    return this._element;
  }
}
