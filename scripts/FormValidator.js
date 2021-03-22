class FormValidator{
  constructor(setting, formElement){
    this._setting = setting;
    this._formElement = formElement;
  }

  _showInputError(input, validationMessage){
    const error = this._formElement.querySelector(`#${input.id}-error`); 
    error.textContent = validationMessage;
    error.classList.add(this._setting.errorClass);
    input.classList.add(this._setting.inputErrorClass);
  }

  _hideInputError(input){
    const error = this._formElement.querySelector(`#${input.id}-error`); 
    error.textContent = "";
    error.classList.remove(this._setting.errorClass);
    input.classList.remove(this._setting.inputErrorClass);
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  };

  _toggleButtonState(inputList, buttonElement) {
    
    if(this._hasInvalidInput(inputList))
      {
      buttonElement.classList.add(this._setting.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else{
      buttonElement.classList.remove(this._setting.inactiveButtonClass);
      buttonElement.disabled = '';
    }
  };

  _isValid (input){
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input, input.validationMessage);
    }
  }

  _setEventListeners(){
    const inputs = Array.from(this._formElement.querySelectorAll(this._setting.inputSelector));
    const button = this._formElement.querySelector(this._setting.submitButtonSelector);
    inputs.forEach((input)=>{
      input.addEventListener("input", () =>{
        this._isValid(input); 
        this._toggleButtonState(inputs, button);
      })
    });

    //this._toggleButtonState(inputs, button);
  }
    
  enableValidation(){  
    this._formElement.addEventListener("submit",((evt) =>{
    evt.preventDefault();
  }))
  
    this._setEventListeners(); 
  }
}

export {FormValidator};