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

const profile = document.querySelector(".profile");
const editProfileButton = profile.querySelector(".profile__edit-button");
const addCardButton = profile.querySelector(".profile__add-button");

const profilePopUp = document.querySelector("#edit-profile-pop-up");
const cardPopUp = document.querySelector("#add-card-pop-up");

const popUpCloseButtons = document.querySelectorAll(".pop-up__close-button");
const profilePopUpForm = profilePopUp.querySelector("form");
const cardPopUpForm = cardPopUp.querySelector("form");

console.log (cardPopUpForm);

const userName = profile.querySelector(".profile__user-name");
const userAbout = profile.querySelector(".profile__user-about");

const userNameInput = profilePopUp.querySelector(
  ".pop-up__input-text_type_user-name"
);
const userAboutInput = profilePopUp.querySelector(
  ".pop-up__input-text_type_user-about"
);

const cardTitleInput = cardPopUp.querySelector(".pop-up__input-text_type_card-title");
const cardUrlInput = cardPopUp.querySelector(".pop-up__input-text_type_image-URL");

function closePopUp(event) {
  event.target.closest(".popup_opened").classList.remove("popup_opened");
}

function openPopUp(item) {
  item.classList.add("popup_opened");
}

function editProfileButtonHandler() {
  userNameInput.value = userName.textContent;
  userAboutInput.value = userAbout.textContent;
  openPopUp(profilePopUp);
}

function profilePopUpFormHandler(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopUp(event);
}

function cardPopUpFormHandler(event) {
  event.preventDefault();
  const newCard = {};
  newCard.name = cardTitleInput.value;
  newCard.link = cardUrlInput.value;
  createCard(newCard);
  cardTitleInput.value ='';
  cardUrlInput.value = '';
  closePopUp(event);
}

popUpCloseButtons.forEach(function (item) {
  item.addEventListener("click", closePopUp);
});

editProfileButton.addEventListener("click", editProfileButtonHandler);

addCardButton.addEventListener("click", function () {
  openPopUp(cardPopUp);
});

profilePopUpForm.addEventListener("submit", profilePopUpFormHandler);
cardPopUpForm.addEventListener("submit", cardPopUpFormHandler);

// const popUp = document.querySelector(".pop-up")
// const closeButton = popUp.querySelector(".pop-up__close-button");
// const submitButton = popUp.querySelector(".pop-up__submit-button");

// const formElement = popUp.querySelector(".pop-up__window");
// const nameInput = formElement.querySelector(
//   ".pop-up__input-text_type_user-name"
// );
// const jobInput = formElement.querySelector(
//   ".pop-up__input-text_type_user-about"
// );

const cardTemplate = document.querySelector("#card").content;
const cardsConteiner = document.querySelector(".cards");

function deleteButtonHandler(evt) {
  evt.target.closest(".card").remove();
}

function likeButtonHandler(evt) {
  evt.target.classList.toggle("card__like_is-active");
}

// Создаем новую карточку

function createCard(item) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementTitel = cardElement.querySelector(".card__title");
  const cardElementLikeButton = cardElement.querySelector(".card__like");
  const cardElementDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );

  cardElementImage.style.backgroundImage = `url('${item.link}')`;
  cardElementTitel.textContent = item.name;
  cardElementLikeButton.addEventListener("click", likeButtonHandler);
  cardElementDeleteButton.addEventListener("click", deleteButtonHandler);

  cardsConteiner.prepend(cardElement);
}

initialCards.forEach(createCard);

// function popUpOpened() {
//   popUp.classList.add("popup_opened");
// }

// // nameInput.value = userName.textContent;
// //   jobInput.value = userAbout.textContent;

// function popUpClose() {
//   popUp.classList.remove("popup_opened");
// }

// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   userName.textContent = nameInput.value;
//   userAbout.textContent = jobInput.value;
//   popUpClose();
// }

// editButton.addEventListener("click", popUpOpened);
// closeButton.addEventListener("click", popUpClose);
// formElement.addEventListener("submit", formSubmitHandler);
