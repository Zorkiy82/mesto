// function welcome(){
//   alert('Новый скрипт подключен');
// }

// const validationSetupData = {
//   formSelector: "page__form",
//   inputSelector: "pop-up__input-text",
//   submitButtonSelector: "pop-up__submit-button",
//   inactiveButtonClass: "pop-up__submit-button_disabled",
//   inputErrorClass: "pop-up__input-text-error",
//   errorClass: "pop-up__input-text-error_visible",
// };

// ** Функция показа сообщения об ошибке

function showInputError(formElement, inputElement, setupData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(setupData.errorClass);
}

// ** Функция удаления сообщения об ошибке
function hideInputError(formElement, inputElement, setupData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(setupData.errorClass);
  errorElement.textContent = "";
}

// ***Функция валидации формы

// Если (инпут не валидный) тогда
//  вызов функции показа ошибки
//  иначе
//  вызов функции убрать сообщение об ошибке.

function checkInputValidity(formElement, inputElement, setupData) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, setupData);
  } else {
    hideInputError(formElement, inputElement, setupData);
  }
}

function hasInvalidInput(inputList){
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, setupData){
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(setupData.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(setupData.inactiveButtonClass);
  };
}

function setEventListeners(formElement, setupData) {
  const inputList = Array.from(
    formElement.querySelectorAll(`.${setupData.inputSelector}`)
  );
  const buttonElement = formElement.querySelector(
    `.${setupData.submitButtonSelector}`
  );
  toggleButtonState(inputList, buttonElement,setupData);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, setupData);
      toggleButtonState(inputList, buttonElement,setupData);
    });
  });
}

function enableValidation(setupData) {
  const formList = Array.from(
    document.querySelectorAll(`.${setupData.formSelector}`)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, setupData);
  });
}
