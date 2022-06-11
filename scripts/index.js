import { initialCards, Card } from "./Сard.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

// ---------------------------------------------------------------------------------------------------------

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

const userNameElement = profile.querySelector(".profile__user-name");
const userAboutElement = profile.querySelector(".profile__user-about");

const profilePopupSelector = ".pop-up_type_profile";
const profilePopupForm = document
  .querySelector(profilePopupSelector)
  .querySelector("form");

const cardPopupSelector = ".pop-up_type_card-add";
const cardPopupForm = document
  .querySelector(cardPopupSelector)
  .querySelector("form");

const popupWithImageSelector = ".pop-up_for-image";

const cardsConteinerSelector = ".cards";

const formValidators = {};

// ---------------------------------------------------------------------------------------------------------

function handleAddCardButton() {
  formValidators[cardPopupForm.getAttribute("name")].resetValidation();
  formValidators[cardPopupForm.getAttribute("name")].disableSubmitButton();
  cardPopup.open();
}

function handleEditProfileButton() {
  profilePopup.setInputValue("userName",userNameElement.textContent);
  profilePopup.setInputValue("userAbout",userAboutElement.textContent);
  formValidators[profilePopupForm.getAttribute("name")].resetValidation();
  formValidators[profilePopupForm.getAttribute("name")].enableSubmitButton();
  profilePopup.open();
}

function handleCardClick(link, title) {
  popupWithImage.open({ link: link, title: title });
}

function handleProfilePopupForm({ userName, userAbout }) {
  userNameElement.textContent = userName;
  userAboutElement.textContent = userAbout;
  profilePopup.close();
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card", handleCardClick);
  return cardElement.createCard();
}

function handleCardPopupForm({ cardTitel, imageURL }) {
  const cardElement = createCard({
    name: cardTitel,
    link: imageURL,
  });

  cardsConteiner.addItem(cardElement);
  cardPopup.close();
}

function enableValidation(setupData) {
  const formList = Array.from(
    document.querySelectorAll(setupData.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(setupData, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

// ---------------------------------------------------------------------------------------------------------
const profilePopup = new PopupWithForm(
  profilePopupSelector,
  handleProfilePopupForm
);
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm(cardPopupSelector, handleCardPopupForm);
cardPopup.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector);

const cardsConteiner = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsConteiner.addItem(cardElement);
    },
  },
  cardsConteinerSelector
);

cardsConteiner.renderItems();

enableValidation(validationSetupData);

editProfileButton.addEventListener("click", handleEditProfileButton);
addCardButton.addEventListener("click", handleAddCardButton);
