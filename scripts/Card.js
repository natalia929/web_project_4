import {popupImage, popupImageName} from "./helpers.js";


class Card {
    constructor(place, cardTemplate, handleCardClick){
        this._place = place;
        this._cardTemplate = cardTemplate;
        this._handleCardClick = handleCardClick;
    }
        _getTemplate(){
            const photosTemplate = document.querySelector(this._cardTemplate).content.querySelector('.element');
            return photosTemplate;
        }

        _handleActiveHeart(evt){
            evt.target.classList.toggle("element__heart-icon_active");
        }

        _handlePhotoDelete(){
            this._photosElement.remove();
        }

        _handlePreviewPopup(){
            
            popupImage.src = this._place.link;
            popupImage.alt = `Photo of ${this._place.name}`;
            popupImageName.textContent = this._place.name;
            this._handleCardClick();
        }

        _setEventListeners(){
            const photosHeart = this._photosElement.querySelector(".element__heart-icon");
            const photosDelete = this._photosElement.querySelector(".element__delete-button");
            const popupCard = this._photosElement.querySelector(".element__image");

            photosHeart.addEventListener("click", (evt) => {this._handleActiveHeart(evt)});

            photosDelete.addEventListener("click", (evt) =>{this._handlePhotoDelete(evt)});

            popupCard.addEventListener("click", (evt) => {this._handleCardClick(this._place.link, this._place.name)});
        }

        getCard(){
            this._photosElement = this._getTemplate().cloneNode(true);
            const popupCard = this._photosElement.querySelector(".element__image");
            popupCard.src = this._place.link;
            popupCard.alt = `Photo of ${this._place.name}`;
            this._photosElement.querySelector(".element__name").textContent = this._place.name;

            this._setEventListeners();

            return this._photosElement;
        }    
}

export {Card};