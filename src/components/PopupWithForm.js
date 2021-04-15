import {Popup} from "./Popup.js";

class PopupWithForm extends Popup{
    constructor(popupSelector, submitHandler){
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector(".form");
    }

    _getInputValues(){
        const values = {};
        const inputs = Array.from(this._form.querySelectorAll(".form__input"));

        inputs.forEach(input =>{
            values[input.name] = input.value; 
        })
        return values;
    }

    close(){
        super.close();
        this._form.reset();
    }

    setEventListeners(){
        super.setEventListeners();

        
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
        })
        
    }
}

export{PopupWithForm};