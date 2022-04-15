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

// const cardsConteiner = document.querySelector(".cards");
// const likes = cardsConteiner.querySelectorAll(".card__like");

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

// function likeHandler(evt) {
//   evt.target.classList.toggle("card__like_is-active");
// }

editButton.addEventListener("click", popUpOpened);
closeButton.addEventListener("click", popUpClose);
formElement.addEventListener("submit", formSubmitHandler);

// likes.forEach(function (item) {
//   item.addEventListener("click", likeHandler);
// });
