import "./pages/index.css";

import {
  initialCards,
  validationSetupData,
  editProfileButton,
  addCardButton,
  userNameElementSelector,
  userAboutElementSelector,
  profilePopupSelector,
  profilePopupForm,
  cardPopupSelector,
  cardPopupForm,
  popupWithImageSelector,
  cardsConteinerSelector,
  formValidators,
} from "./scripts/utils/constants.js";

import { Card } from "./scripts/components/Сard.js";
import { FormValidator } from "./scripts/components/FormValidator.js";
import { Section } from "./scripts/components/Section.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { UserInfo } from "./scripts/components/UserInfo.js";

// ---------------------------------------------------------------------------------------------------------

function handleAddCardButton() {
  formValidators[cardPopupForm.getAttribute("name")].resetValidation();
  formValidators[cardPopupForm.getAttribute("name")].disableSubmitButton();
  cardPopup.open();
}

function handleEditProfileButton() {
  const userData = userInfo.getUserInfo();
  profilePopup.setInputValue("userName", userData.nameText);
  profilePopup.setInputValue("userAbout", userData.aboutText);
  formValidators[profilePopupForm.getAttribute("name")].resetValidation();
  formValidators[profilePopupForm.getAttribute("name")].enableSubmitButton();
  profilePopup.open();
}

function handleCardClick(link, title) {
  popupWithImage.open({ link: link, title: title });
}

function handleProfilePopupForm({ userName, userAbout }) {
  userInfo.setUserInfo({ nameText: userName, aboutText: userAbout });
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

const userInfo = new UserInfo({
  nameSelector: userNameElementSelector,
  aboutSelector: userAboutElementSelector,
});

const profilePopup = new PopupWithForm(
  profilePopupSelector,
  handleProfilePopupForm
);
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm(cardPopupSelector, handleCardPopupForm);
cardPopup.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

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
