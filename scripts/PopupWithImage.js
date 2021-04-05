import {Popup} from "./Popup";

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }

    open(link, text) {
        super.open();
        const image = this._popup.querySelector('.popup__image');
        const imageName = this._popup.querySelector('.popup__image-name');
        image.src = link;
        imageName.textContent = text;
      }
}

export {PopupWithImage};