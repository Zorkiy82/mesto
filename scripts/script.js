const validationSetupData = {
  formSelector: ".page__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit-button",
  inactiveButtonClass: "pop-up__submit-button_disabled",
  inputErrorClass: "pop-up__input_error",
  errorClass: "pop-up__input-text-error_visible",
};

const popUpsList = document.querySelectorAll(`.pop-up`);

const profile = document.querySelector(".profile");
const editProfileButton = profile.querySelector(".profile__edit-button");
const addCardButton = profile.querySelector(".profile__add-button");

const userName = profile.querySelector(".profile__user-name");
const userAbout = profile.querySelector(".profile__user-about");

const profilePopUp = document.querySelector(".pop-up_type_profile");
const profilePopUpForm = profilePopUp.querySelector("form");
const userNameInput = profilePopUpForm.querySelector(
  ".pop-up__input_type_user-name"
);
const userAboutInput = profilePopUpForm.querySelector(
  ".pop-up__input_type_user-about"
);
const submitButtonprofilePopUp = profilePopUpForm.querySelector("button");

const cardPopUp = document.querySelector(".pop-up_type_card-add");
const cardPopUpForm = cardPopUp.querySelector("form");
const cardTitleInput = cardPopUpForm.querySelector(
  ".pop-up__input_type_card-title"
);
const cardUrlInput = cardPopUpForm.querySelector(
  ".pop-up__input_type_image-URL"
);
const submitButtonCardPopUp = cardPopUpForm.querySelector("button");

const imagePopUp = document.querySelector(".pop-up_for-image");
const imagePopUpImage = imagePopUp.querySelector(".pop-up__image");
const imagePopUpTitel = imagePopUp.querySelector(".pop-up__image-title");

const popUpCloseButtonsList = document.querySelectorAll(
  ".pop-up__close-button"
);

const cardTemplate = document.querySelector("#card").content;
const cardsConteiner = document.querySelector(".cards");

function keydownHeandler(evt) {
  if (evt.key === "Escape") {
    const popUpElement = document.querySelector(".popup_opened");
    popUpCloseButtonHeandler(popUpElement);
  }
}

function closePopUp(popUpElement) {
  window.removeEventListener("keydown", keydownHeandler);
  popUpElement.classList.remove("popup_opened");
}

function openPopUp(popUpElement) {
  window.addEventListener("keydown", keydownHeandler);
  popUpElement.classList.add("popup_opened");
}

function clearPopUpForm(popUpElement) {
  const formElement = popUpElement.querySelector(
    validationSetupData.formSelector
  );

  if (formElement) {
    formElement.reset();
    clearInputError(formElement, validationSetupData);
  }
}

function popUpCloseButtonHeandler(targetElement) {
  const popUpElement = targetElement.closest(".popup_opened");

  clearPopUpForm(popUpElement);
  closePopUp(popUpElement);
}

function editProfileButtonHandler() {
  userNameInput.value = userName.textContent;
  userAboutInput.value = userAbout.textContent;
  openPopUp(profilePopUp);
  enableSubmitButton(submitButtonprofilePopUp, validationSetupData);
}

function profilePopUpFormHandler(event) {
  userName.textContent = userNameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopUp(profilePopUp);
  profilePopUpForm.reset();
}

function cardPopUpFormHandler(event) {
  const newCardElement = {
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  };

  addCard(cardsConteiner, createCard(newCardElement));
  closePopUp(cardPopUp);
  cardPopUpForm.reset();
  disableSubmitButton(submitButtonCardPopUp, validationSetupData);
}

function deleteButtonHandler(evt) {
  evt.target.closest(".card").remove();
}

function likeButtonHandler(evt) {
  evt.target.classList.toggle("card__like_is-active");
}

function imagePopUpHandler(cardData) {
  imagePopUpImage.src = cardData.link;
  imagePopUpTitel.textContent = cardData.name;
  openPopUp(imagePopUp);
}

function addCard(listElement, cardElement) {
  listElement.prepend(cardElement);
}

function createCard(cardData) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementTitel = cardElement.querySelector(".card__title");
  const cardElementLikeButton = cardElement.querySelector(".card__like");
  const cardElementDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );

  cardElementImage.style.backgroundImage = `url('${cardData.link}')`;
  cardElementTitel.textContent = cardData.name;
  cardElementLikeButton.addEventListener("click", likeButtonHandler);
  cardElementDeleteButton.addEventListener("click", deleteButtonHandler);
  cardElementImage.addEventListener("click", () => imagePopUpHandler(cardData));

  return cardElement;
}

enableValidation(validationSetupData);

initialCards.forEach((cardData) =>
  addCard(cardsConteiner, createCard(cardData))
);

popUpCloseButtonsList.forEach(function (popUpCloseButtonElement) {
  popUpCloseButtonElement.addEventListener("click", (evt) => {
    popUpCloseButtonHeandler(evt.target);
  });
});

editProfileButton.addEventListener("click", editProfileButtonHandler);
profilePopUpForm.addEventListener("submit", profilePopUpFormHandler);
addCardButton.addEventListener("click", function () {
  openPopUp(cardPopUp);
});

cardPopUpForm.addEventListener("submit", cardPopUpFormHandler);

popUpsList.forEach((popUpElement) => {
  popUpElement.addEventListener("mousedown", (evt) => {
    if (evt.target === evt.currentTarget) {
      popUpCloseButtonHeandler(evt.target);
    }
  });
});
