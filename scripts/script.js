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

const userCard = document.querySelector(".profile__user-card");
const editButton = userCard.querySelector(".profile__edit-button");
const userName = userCard.querySelector(".profile__user-name");
const userAbout = userCard.querySelector(".profile__user-about");

const popUp = document.querySelector(".pop-up");
const closeButton = popUp.querySelector(".pop-up__close-button");
const submitButton = popUp.querySelector(".pop-up__submit-button");

const formElement = popUp.querySelector(".pop-up__window");
const nameInput = formElement.querySelector(
  ".pop-up__input-text_type_user-name"
);
const jobInput = formElement.querySelector(
  ".pop-up__input-text_type_user-about"
);

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
  const cardElementDeleteButton = cardElement.querySelector(".card__delete-button");

  cardElementImage.style.backgroundImage = `url('${item.link}')`;
  cardElementTitel.textContent = item.name;
  cardElementLikeButton.addEventListener('click', likeButtonHandler);
  cardElementDeleteButton.addEventListener('click', deleteButtonHandler);

  cardsConteiner.prepend(cardElement);
}

initialCards.forEach(createCard);

function popUpOpened() {
  nameInput.value = userName.textContent;
  jobInput.value = userAbout.textContent;
  popUp.classList.add("popup_opened");
}

function popUpClose() {
  popUp.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAbout.textContent = jobInput.value;
  popUpClose();
}



editButton.addEventListener("click", popUpOpened);
closeButton.addEventListener("click", popUpClose);
formElement.addEventListener("submit", formSubmitHandler);

