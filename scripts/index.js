import { initialCards, Card } from "./Сard.js";
import { FormValidator } from "./FormValidator.js";

const validationSetupData = {
  formSelector: ".page__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit-button",
  inactiveButtonClass: "pop-up__submit-button_disabled",
  inputErrorClass: "pop-up__input_error",
  errorClass: "pop-up__input-text-error_visible",
};

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

const cardPopUp = document.querySelector(".pop-up_type_card-add");
const cardPopUpForm = cardPopUp.querySelector("form");
const cardTitleInput = cardPopUpForm.querySelector(
  ".pop-up__input_type_card-title"
);
const cardUrlInput = cardPopUpForm.querySelector(
  ".pop-up__input_type_image-URL"
);

const imagePopUp = document.querySelector(".pop-up_for-image");
const imagePopUpImage = imagePopUp.querySelector(".pop-up__image");
const imagePopUpTitel = imagePopUp.querySelector(".pop-up__image-title");

const popUpsList = [profilePopUp, cardPopUp, imagePopUp];

const cardsConteiner = document.querySelector(".cards");

function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const popUpElement = document.querySelector(".popup_opened");
    closePopUp(popUpElement);
  }
}

function closePopUp(popUpElement) {
  window.removeEventListener("keydown", handleEscKey);
  popUpElement.classList.remove("popup_opened");
}

function openPopUp(popUpElement) {
  window.addEventListener("keydown", handleEscKey);
  popUpElement.classList.add("popup_opened");
}

function handleAddCardButton() {
  cardPopUpForm.reset();
  validationCardPopUpForm.resetValidation();
  validationCardPopUpForm.disableSubmitButton();
  openPopUp(cardPopUp);
}

function handleEditProfileButton() {
  userNameInput.value = userName.textContent;
  userAboutInput.value = userAbout.textContent;
  validationProfilePopUpForm.resetValidation();
  validationProfilePopUpForm.enableSubmitButton();
  openPopUp(profilePopUp);
}

function handleCardImageClick(link, title){
  imagePopUpImage.src =link;
  imagePopUpImage.alt = title;
  imagePopUpTitel.textContent = title;
  openPopUp(imagePopUp);
}

function handleProfilePopUpForm() {
  userName.textContent = userNameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopUp(profilePopUp);
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card", handleCardImageClick);
  return cardElement.createCard();
}

function handleCardPopUpForm() {
  const cardElement = createCard({
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  });

  addCard(cardsConteiner, cardElement);
  closePopUp(cardPopUp);
}

function addCard(listElement, cardElement) {
  listElement.prepend(cardElement);
}
// cardPopUpForm;
const validationProfilePopUpForm = new FormValidator(
  validationSetupData,
  profilePopUpForm
);
const validationCardPopUpForm = new FormValidator(
  validationSetupData,
  cardPopUpForm
);
validationProfilePopUpForm.enableValidation();
validationCardPopUpForm.enableValidation();

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  addCard(cardsConteiner, cardElement);
});

editProfileButton.addEventListener("click", handleEditProfileButton);
profilePopUpForm.addEventListener("submit", handleProfilePopUpForm);

addCardButton.addEventListener("click", handleAddCardButton);
cardPopUpForm.addEventListener("submit", handleCardPopUpForm);

popUpsList.forEach((popUpElement) => {
  popUpElement.addEventListener("mousedown", (evt) => {
    const targetClassList = evt.target.classList;

    if (
      targetClassList.contains("pop-up") ||
      targetClassList.contains("pop-up__close-button")
    ) {
      closePopUp(popUpElement);
    }
  });
});
