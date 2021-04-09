import { Popup } from "./Popup";

class PopupWithForm extends Popup{
    constructor(popupSelector, submitHandler){
        super(popupSelector);
        this._submitHandler = submitHandler;
    }

    _getInputValues(){
        const values = {};
        const inputs = Array.from(this._form.querySelectorAll(".form__input "));

        inputs.forEach(input =>{
            values[input.name] = input.value; 
        })
        return values;
    }

    close(){
        super.close();
        //this._form.reset();
    }

    setEventListeners(){
        super.setEventListeners();

        this._form = this._popup.querySelector(".form");
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitHandler();
        })
        
    }
}

export{PopupWithForm};