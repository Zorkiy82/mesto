import "./index.css";

import {
  fetchSetupData,
  validationSetupData,
  editProfileButton,
  addCardButton,
  userNameElementSelector,
  userAboutElementSelector,
  userAvatarElementSelector,
  profilePopupSelector,
  profilePopupForm,
  cardPopupSelector,
  cardPopupForm,
  popupWithImageSelector,
  areYouSurePopupSelector,
  cardsConteinerSelector,
  formValidators
} from "../scripts/utils/constants.js";

import { Api } from "../scripts/components/Api";
import { Card } from "../scripts/components/Сard.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";

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
  api
    .patchUserInfo({ name: userName, about: userAbout })
      .then((userData) => {
        userInfo.setUserData(userData);
      })
      .catch((err) => {
        alert(err);
      });
  profilePopup.close();
}

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card", handleCardClick, userInfo.getUserId(),handleDeleteCardButton);

  return cardElement.createCard();
}

function handleCardPopupForm({ cardTitel, imageURL }) {
api
  .postCardData({
      name: cardTitel,
      link: imageURL,
    })
    .then((cardData) => {
      const cardElement = createCard(cardData);
      cardsConteiner.addItem(cardElement);
      cardPopup.close();
    })
    .catch((err) => {
      alert(err);
    });
}



function handleDeleteCardButton(cardObject){
  areYouSurePopup.cardForDelete = cardObject;
  areYouSurePopup.open();

}

function handleAreYouSurePopupForm(){
  api
  .deleteCard(areYouSurePopup.cardForDelete._id)
    .then((cardData) => {
      areYouSurePopup.close();
      areYouSurePopup.cardForDelete.deleteElementCard();
      areYouSurePopup.cardForDelete = {};
    })
    .catch((err) => {
      areYouSurePopup.close();
      areYouSurePopup.cardForDelete = {};
      alert(err);
    });
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
const api = new Api(fetchSetupData);

const userInfo = new UserInfo({
  nameSelector: userNameElementSelector,
  aboutSelector: userAboutElementSelector,
  avatarSelector: userAvatarElementSelector,
});

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserData(userData);
  })
  .catch((err) => {
    alert(err);
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
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsConteiner.addItem(cardElement);
    },
  },
  cardsConteinerSelector
);

api
  .getCardsArray()
  .then((cardsArray) => {
    cardsConteiner.renderItems(cardsArray.reverse());
  })
  .catch((err) => {
    alert(err);
  });

const areYouSurePopup = new PopupWithForm(areYouSurePopupSelector,handleAreYouSurePopupForm);
areYouSurePopup.setEventListeners();

enableValidation(validationSetupData);

editProfileButton.addEventListener("click", handleEditProfileButton);
addCardButton.addEventListener("click", handleAddCardButton);
