const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

const userNameElementSelector = ".profile__user-name";
const userAboutElementSelector = ".profile__user-about";

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

export {
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
  formValidators
};
