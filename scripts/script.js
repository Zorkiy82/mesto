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
  const newCardElement = {};
  newCardElement.name = cardTitleInput.value;
  newCardElement.link = cardUrlInput.value;
  createCard(newCardElement);
  closePopUp(event);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
}

function deleteButtonHandler(evt) {
  evt.target.closest(".card").remove();
}

function likeButtonHandler(evt) {
  evt.target.classList.toggle("card__like_is-active");
}

function imagePopUpHandler(event) {
  const cardElementLink = event.target.style.backgroundImage.slice(5, -2);
  const cardElementTitel = event.target
    .closest(".card")
    .querySelector(".card__title").textContent;
  imagePopUpImage.src = cardElementLink;
  imagePopUpTitel.textContent = cardElementTitel;

  openPopUp(imagePopUp);
}

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
  cardElementImage.addEventListener("click", imagePopUpHandler);

  cardsConteiner.prepend(cardElement);
}

initialCards.forEach(createCard);

popUpCloseButtons.forEach(function (item) {
  item.addEventListener("click", closePopUp);
});

editProfileButton.addEventListener("click", editProfileButtonHandler);
profilePopUpForm.addEventListener("submit", profilePopUpFormHandler);

addCardButton.addEventListener("click", function () {
  openPopUp(cardPopUp);
});
cardPopUpForm.addEventListener("submit", cardPopUpFormHandler);
