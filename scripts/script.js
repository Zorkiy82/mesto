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

// const validationSetupData = {
//   formSelector: "page__form",
//   inputSelector: "pop-up__input-text",
//   submitButtonSelector: "pop-up__submit-button",
//   inactiveButtonClass: "pop-up__submit-button_disabled",
//   inputErrorClass: "pop-up__input-text-error",
//   errorClass: "pop-up__input-text-error_visible",
// };

const profile = document.querySelector(".profile");
const editProfileButton = profile.querySelector(".profile__edit-button");
const addCardButton = profile.querySelector(".profile__add-button");

const userName = profile.querySelector(".profile__user-name");
const userAbout = profile.querySelector(".profile__user-about");

const profilePopUp = document.querySelector("#edit-profile-pop-up");
const profilePopUpForm = profilePopUp.querySelector("form");
const userNameInput = profilePopUpForm.querySelector(
  ".pop-up__input-text_type_user-name"
);
const userAboutInput = profilePopUpForm.querySelector(
  ".pop-up__input-text_type_user-about"
);

const cardPopUp = document.querySelector("#add-card-pop-up");
const cardPopUpForm = cardPopUp.querySelector("form");
const cardTitleInput = cardPopUpForm.querySelector(
  ".pop-up__input-text_type_card-title"
);
const cardUrlInput = cardPopUpForm.querySelector(
  ".pop-up__input-text_type_image-URL"
);

const imagePopUp = document.querySelector("#image-pop-up");
const imagePopUpImage = imagePopUp.querySelector(".pop-up__image");
const imagePopUpTitel = imagePopUp.querySelector(".pop-up__image-title");

const popUpCloseButtons = document.querySelectorAll(".pop-up__close-button");

const cardTemplate = document.querySelector("#card").content;
const cardsConteiner = document.querySelector(".cards");

let myEvent = new Event("input");

function closePopUp(event) {
  event.target.closest(".popup_opened").classList.remove("popup_opened");
}

function openPopUp(popUpElement) {
  popUpElement.classList.add("popup_opened");
}

function editProfileButtonHandler() {
  userNameInput.value = userName.textContent;
  userAboutInput.value = userAbout.textContent;
  userNameInput.dispatchEvent(myEvent);
  userAboutInput.dispatchEvent(myEvent);
  openPopUp(profilePopUp);
}

function profilePopUpFormHandler(event) {
  userName.textContent = userNameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopUp(event);
}

function cardPopUpFormHandler(event) {
  const newCardElement = {
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  };

  addCard(cardsConteiner, createCard(newCardElement));
  closePopUp(event);
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

// //Чтобы поля инпута небыли пустыми в момент первой инициализации состояния кнопок.
// userNameInput.value = userName.textContent;
// userAboutInput.value = userAbout.textContent;

enableValidation({
  formSelector: "page__form",
  inputSelector: "pop-up__input-text",
  submitButtonSelector: "pop-up__submit-button",
  inactiveButtonClass: "pop-up__submit-button_disabled",
  inputErrorClass: "pop-up__input-text-error",
  errorClass: "pop-up__input-text-error_visible",
});

initialCards.forEach((cardData) =>
  addCard(cardsConteiner, createCard(cardData))
);

popUpCloseButtons.forEach(function (item) {
  item.addEventListener("click", closePopUp);
});

editProfileButton.addEventListener("click", editProfileButtonHandler);
profilePopUpForm.addEventListener("submit", profilePopUpFormHandler);

addCardButton.addEventListener("click", function () {
  openPopUp(cardPopUp);
});
cardPopUpForm.addEventListener("submit", cardPopUpFormHandler);
