// ** Функция показа сообщения об ошибке
function showInputError(formElement, inputElement, setupData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(setupData.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(setupData.errorClass);
}

// ** Функция удаления сообщения об ошибке
function hideInputError(formElement, inputElement, setupData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(setupData.inputErrorClass);
  errorElement.classList.remove(setupData.errorClass);
  errorElement.textContent = "";
}

function clearInputError(formElement, validationSetupData) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationSetupData.inputSelector)
  );
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationSetupData);
  });
}

// ** Функция проверки валидности формы
function checkInputValidity(formElement, inputElement, setupData) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, setupData);
  } else {
    hideInputError(formElement, inputElement, setupData);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function enableSubmitButton(buttonElement, setupData) {
  buttonElement.classList.remove(setupData.inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
}

function disableSubmitButton(buttonElement, setupData) {
  buttonElement.classList.add(setupData.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
}

function toggleButtonState(inputList, buttonElement, setupData) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, setupData);
  } else {
    enableSubmitButton(buttonElement, setupData);
  }
}

function setEventListeners(formElement, setupData) {
  const inputList = Array.from(
    formElement.querySelectorAll(setupData.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    setupData.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, setupData);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, setupData);
      toggleButtonState(inputList, buttonElement, setupData);
    });
  });
}

function enableValidation(setupData) {
  const formList = Array.from(
    document.querySelectorAll(setupData.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, setupData);
  });
}
