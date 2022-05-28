import { initialCards, Card } from "./cards.js";
import { FormValidator } from "./validate.js";

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

const popUpsList = [profilePopUp, cardPopUp];

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
  if (popUpElement.classList.contains("pop-up_type_profile")) {
    profilePopUpForm.reset();
    validationProfilePopUpForm.clearInputError();
  } else if (popUpElement.classList.contains("pop-up_type_card-add")) {
    cardPopUpForm.reset();
    validationCardPopUpForm.clearInputError();
  }
}

function popUpCloseButtonHeandler(popUpElement) {
  // Очищаем форму перед закрытием, т.к. на некоторых разрешениях,
  // не сброшенные элементы ошибок, не дают нажать на кнопку удаления
  // карточки (даже когда попап не виден на экране).
  clearPopUpForm(popUpElement);

  closePopUp(popUpElement);
}

function editProfileButtonHandler() {
  userNameInput.value = userName.textContent;
  userAboutInput.value = userAbout.textContent;
  openPopUp(profilePopUp);
  validationProfilePopUpForm.enableSubmitButton();
}

function profilePopUpFormHandler(event) {
  userName.textContent = userNameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopUp(profilePopUp);
  profilePopUpForm.reset();
}

function cardPopUpFormHandler() {
  const CardData = {
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  };

  const cardElement = new Card(CardData, "#card");
  addCard(cardsConteiner, cardElement.createCard());
  closePopUp(cardPopUp);
  cardPopUpForm.reset();
  validationCardPopUpForm.disableSubmitButton();
}

function addCard(listElement, cardElement) {
  listElement.prepend(cardElement);
}
cardPopUpForm;
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
  const cardElement = new Card(cardData, "#card");
  addCard(cardsConteiner, cardElement.createCard());
});

editProfileButton.addEventListener("click", editProfileButtonHandler);
profilePopUpForm.addEventListener("submit", profilePopUpFormHandler);
addCardButton.addEventListener("click", function () {
  openPopUp(cardPopUp);
});

cardPopUpForm.addEventListener("submit", cardPopUpFormHandler);

popUpsList.forEach((popUpElement) => {
  popUpElement.addEventListener("mousedown", (evt) => {
    const targetClassList = evt.target.classList;

    if (
      targetClassList.contains("pop-up") ||
      targetClassList.contains("pop-up__close-button")
    ) {
      popUpCloseButtonHeandler(popUpElement);
    }
  });
});
