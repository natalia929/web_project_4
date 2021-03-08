function showInputError(input, inputValidationMessage, form, settingObject){
    const error = form.querySelector(`#${input.id}-error`); 
    error.textContent = input.validationMessage;
    error.classList.add(settingObject.errorClass);
    input.classList.add(settingObject.inputErrorClass);
}

function hideInputError(input, form, settingObject){
    const error = form.querySelector(`#${input.id}-error`); 
    error.textContent = ""
    error.classList.remove(settingObject.errorClass);
    input.classList.remove(settingObject.inputErrorClass);
}

function hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid)
};

function toggleButtonState(inputList, buttonElement, settingObject) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(settingObject.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else {
      buttonElement.classList.remove(settingObject.inactiveButtonClass);
      buttonElement.disabled = '';
    }
  };

function isValid (input, form, settingObject){
    if (input.validity.valid) {
        hideInputError(input, form, settingObject);
      } else {
        showInputError(input, input.ValidationMessage, form, settingObject);
      }
}


function enableValidation(settingObject){
    const forms = Array.from(document.querySelectorAll(settingObject.formSelector));
    forms.forEach((form) => {
        form.addEventListener("submit",((evt) =>{
            evt.preventDefault();
        }))

        const inputs = Array.from(form.querySelectorAll(settingObject.inputSelector));
        const button = form.querySelector(settingObject.submitButtonSelector);
        inputs.forEach((input)=>{
            input.addEventListener("input", () =>{
                isValid(input, form, settingObject) 
                toggleButtonState(inputs, button, settingObject);
            })

        })
    })
}

const settingObject = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
  };

enableValidation(settingObject);