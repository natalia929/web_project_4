import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";

import{popupWindow, openPopup, closePopup} from "./helpers.js";

const editButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const popupEditButton = document.querySelector(".popup_type_edit");
const closeIcon = document.querySelector(".popup__close-icon");
const formEditButton = document.querySelector(".form-editCard");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const addButton = document.querySelector(".profile__add-button");
const photosTemplate = document.querySelector(".photos-template").content.querySelector('.element');
const photosList = document.querySelector(".elements__list");
const popupAddButton = document.querySelector(".popup_type_add")
const closeIconAddButton = popupAddButton.querySelector(".popup__close-icon")
const formAddButton = document.querySelector(".form-addCard");
const place = document.querySelector(".form__input_type_title");
const url = document.querySelector(".form__input_type_link");
const closeIconPopupWindow = popupWindow.querySelector(".popup__close-icon");


//FormValidator
const setting = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

const editFormValidator = new FormValidator(setting, formEditButton);

const addFormValidator = new FormValidator(setting, formAddButton);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Close pop-up photos

closeIconPopupWindow.addEventListener("click", () => {
  closePopup(popupWindow);
})


//Edit button
editButton.addEventListener("click", () => {
    
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEditButton);
    
})

closeIcon.addEventListener("click", () => {
    closePopup(popupEditButton);
})
    
formEditButton.addEventListener("submit", function(event){
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditButton);  
})

//Add button

addButton.addEventListener("click", () =>{
    
    openPopup(popupAddButton);
    
})

closeIconAddButton.addEventListener("click", () =>{
    closePopup(popupAddButton);
})

//Initial cards
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  },
]; 

//Add initial photos
initialCards.forEach(place =>{
    const card = new Card(place, ".photos-template");
    photosList.prepend(card.getCard());
});
 
formAddButton.addEventListener("submit", function(event){
  event.preventDefault(); 
  const data = {name: place.value, link: url.value};
  const card = new Card(data, ".photos-template");
  photosList.prepend(card.getCard());
  closePopup(popupAddButton);

  url.value = "";
  place.value = "";
    
})

//Close popup clicing on the overlay
const popups = Array.from(document.querySelectorAll(".popup"));

popups.forEach((popup) => {
  popup.addEventListener("click", evt => {
    if(evt.target.classList.contains("popup")){
      closePopup(evt.target);
    } 
  });
})



