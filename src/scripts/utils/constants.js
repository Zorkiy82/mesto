const fetchSetupData = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "113896b8-685b-4e8f-b932-f30a44a399cc",
    "Content-Type": "application/json",
  },
};

// https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg

// let initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

const validationSetupData = {
  formSelector: ".page__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__submit-button",
  inactiveButtonClass: "pop-up__submit-button_disabled",
  inputErrorClass: "pop-up__input_error",
  errorClass: "pop-up__input-text-error_visible",
};

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const editAvatarButton = document.querySelector(".profile__avatar-overlay");

const userNameElementSelector = ".profile__user-name";
const userAboutElementSelector = ".profile__user-about";
const userAvatarElementSelector = ".profile__user-avatar";

const profilePopupSelector = ".pop-up_type_profile";
const profilePopupForm = document
  .querySelector(profilePopupSelector)
  .querySelector("form");

const cardPopupSelector = ".pop-up_type_card-add";
const cardPopupForm = document
  .querySelector(cardPopupSelector)
  .querySelector("form");

const popupWithImageSelector = ".pop-up_for-image";

const areYouSurePopupSelector = ".pop-up_type_are-you-sure";

const editAvatarPopupSelector = ".pop-up_type_edit-avatar";
const editAvatarPopupForm = document
  .querySelector(editAvatarPopupSelector)
  .querySelector("form");

const cardsConteinerSelector = ".cards";

const formValidators = {};

export {
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
};
