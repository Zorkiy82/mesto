export class Card {
  constructor(
    cardData,
    cardTemplateSelector,
    handleElementImageClick,
    curentUserId,
    handleDeleteCardButton,
    handleLikeButton
  ) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._curentUserId = curentUserId;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleElementImageClick = handleElementImageClick;
    this._like = false;
    this._likesArray = cardData.likes;
    this._likesCounter = cardData.likes.length;
    this._isCurentUserCard = this._curentUserId === cardData.owner._id;
    this._handleDeleteButton = handleDeleteCardButton;
    this._handleLikeButton = handleLikeButton;
  }

  _getTemplate() {
    return document.querySelector(this._cardTemplateSelector);
  }

  _toggleLikeState() {
    this._elementLikeButton.classList.toggle("card__like_is-active");
    this._like = !this._like;
  }

  deleteElementCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener("click", () => {
      this._handleLikeButton(this);
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

  updateLikeState(likesArray) {
    this._likesArray = likesArray;
    this._likesCounter = likesArray.length;
    this.elementLikesCounter.textContent = this._likesCounter;
    const newLikeState = this._likesArray.some(
      (arrayItem) => arrayItem._id === this._curentUserId
    );
    if (newLikeState !== this._like) {
      this._toggleLikeState();
    }
  }

  createCard() {
    this._element = this._getTemplate()
      .content.querySelector(".card")
      .cloneNode(true);
    this._elmentImage = this._element.querySelector(".card__image");
    this._elementTitel = this._element.querySelector(".card__title");
    this._elementLikeButton = this._element.querySelector(".card__like");
    this.elementLikesCounter = this._element.querySelector(
      ".card__likes-counter"
    );

    this._elementDeleteButton = this._element.querySelector(
      ".card__delete-button"
    );

    this.updateLikeState(this._likesArray);

    if (!this._isCurentUserCard) {
      this._elementDeleteButton.remove();
    }

    this._element.id = this._id;
    this._elmentImage.src = this._link;
    this._elmentImage.alt = this._title;
    this._elementTitel.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}
