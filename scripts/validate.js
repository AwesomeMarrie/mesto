//validation
const editProfileForm = document.forms["get-profile"];
const addPhotoForm = document.forms["get-place"];
const saveButtonEdit = document.getElementById("button__save_edit");
const saveButtonPlace = document.getElementById("button__save_place");

function showError(input, errorMessage) {
  const fieldset = input.closest(".form");
  const errorBlock = fieldset.querySelector(".popup__input-error");

  errorBlock.textContent = errorMessage;
  errorBlock.classList.add("popup__input-error_active");
}

function hideError(input) {
  const fieldset = input.closest(".form");
  const errorBlock = fieldset.querySelector(".popup__input-error");

  errorBlock.textContent = "";
  errorBlock.classList.remove("popup__input-error_active");
}

function enableValidation(form) {
  const inputs = Array.from(form.querySelectorAll(".popup__input"));

  inputs.forEach((input) => {
    input.addEventListener("input", () => setInputValidity(input, form));
  });
}
function checkBlockButton(form) {
  if (form.checkValidity()) {
    saveButtonEdit.classList.add("popup__save");
    saveButtonEdit.classList.remove("button__disabled");
    saveButtonPlace.classList.add("popup__save");
    saveButtonPlace.classList.remove("button__disabled");
  } else {
    saveButtonEdit.classList.remove("popup__save");
    saveButtonEdit.classList.add("button__disabled");
    saveButtonPlace.classList.remove("popup__save");
    saveButtonPlace.classList.add("button__disabled");

    const inputs = Array.from(form.querySelectorAll("popup__input"));

    inputs.forEach((input) => {
      setInputValidity(input, form);
    });
  }
}
function setInputValidity(input, form) {
  hideError(input);

  if (input.validity.typeMismatch) {
    showError(input, input.validationMessage);
  }
  if (input.validity.valueMissing) {
    showError(input, input.validationMessage);
  }
  if (input.validity.tooShort) {
    showError(input, input.validationMessage);
  }
  checkBlockButton(form);
}
enableValidation(editProfileForm);
enableValidation(addPhotoForm);
