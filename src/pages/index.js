import "./index.css";

import {
  fetchSetupData,
  validationSetupData,
  editProfileButton,
  addCardButton,
  editAvatarButton,
  userNameElementSelector,
  userAboutElementSelector,
  userAvatarElementSelector,
  profilePopupSelector,
  profilePopupForm,
  cardPopupSelector,
  cardPopupForm,
  popupWithImageSelector,
  areYouSurePopupSelector,
  editAvatarPopupSelector,
  editAvatarPopupForm,
  cardsConteinerSelector,
  formValidators,
} from "../scripts/utils/constants.js";

import { Api } from "../scripts/components/Api";
import { Card } from "../scripts/components/Сard.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation";
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

function handleEditAvatarButton() {
  formValidators[editAvatarPopupForm.getAttribute("name")].resetValidation();
  formValidators[editAvatarPopupForm.getAttribute("name")].enableSubmitButton();
  editAvatarPopup.open();
}

function handleCardClick(link, title) {
  popupWithImage.open({ link: link, title: title });
}

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card",
    handleCardClick,
    userInfo.getUserId(),
    handleDeleteCardButton,
    handleLikeButton
  );

  return cardElement.createCard();
}

function handleCardPopupForm({ cardTitel, imageURL }) {
  cardPopup.setButtonText("Сохранение...");
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
    })
    .finally(() => {
      cardPopup.setButtonText("Создать");
    });
}

function handleProfilePopupForm({ userName, userAbout }) {
  profilePopup.setButtonText("Сохранение...");
  api
    .patchUserInfo({ name: userName, about: userAbout })
    .then((userData) => {
      userInfo.setUserData(userData);
      profilePopup.close();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      profilePopup.setButtonText("Сохранить");
    });
}

function handleEditAvatarPopupForm(data) {
  editAvatarPopup.setButtonText("Сохранение...");
  api
    .patchUserAvatar({ avatar: data.avatarURL })
    .then((userData) => {
      userInfo.setUserData(userData);
      editAvatarPopup.close();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      editAvatarPopup.setButtonText("Сохранить");
    });
}

function handleAreYouSurePopupForm() {
  areYouSurePopup.setButtonText("Удаление...");
  api
    .deleteCard(areYouSurePopup.cardForDelete._id)
    .then(() => {
      areYouSurePopup.cardForDelete.deleteElementCard();
      areYouSurePopup.close();
      areYouSurePopup.cardForDelete = {}
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      areYouSurePopup.setButtonText("Да");
    });
}

function handleDeleteCardButton(cardObject) {
  areYouSurePopup.cardForDelete = cardObject;
  areYouSurePopup.open();
}

function handleLikeButton(cardObject) {
  if (cardObject._like) {
    api
      .deleteLike(cardObject._id)
      .then((cardData) => {
        cardObject.updateLikeState(cardData.likes);
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    api
      .setLike(cardObject._id)
      .then((cardData) => {
        cardObject.updateLikeState(cardData.likes);
      })
      .catch((err) => {
        alert(err);
      });
  }
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

const profilePopup = new PopupWithForm(
  profilePopupSelector,
  handleProfilePopupForm
);
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm(cardPopupSelector, handleCardPopupForm);
cardPopup.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  editAvatarPopupSelector,
  handleEditAvatarPopupForm
);
editAvatarPopup.setEventListeners();

const cardsConteiner = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);
      cardsConteiner.addItem(cardElement);
    },
  },
  cardsConteinerSelector
);

const areYouSurePopup = new PopupWithConfirmation(
  areYouSurePopupSelector,
  handleAreYouSurePopupForm
);
areYouSurePopup.setEventListeners();

enableValidation(validationSetupData);

editProfileButton.addEventListener("click", handleEditProfileButton);
addCardButton.addEventListener("click", handleAddCardButton);
editAvatarButton.addEventListener("click", handleEditAvatarButton);

Promise.all([api.getUserInfo(), api.getCardsArray()])
  .then((data) => {
    userInfo.setUserData(data[0]);
    cardsConteiner.reverseRenderItems(data[1]);
    setTimeout(() => {
      document.querySelector('.preloader').remove();
    }, 500);

  })
  .catch((err) => {
    alert(err);
  });
