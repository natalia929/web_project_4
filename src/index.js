import "./styles/index.css";

import {FormValidator} from "../scripts/FormValidator.js";
import {Card} from "../scripts/Card.js";
import {Section} from "../scripts/Section.js";

import {Popup} from "../scripts/Popup.js";
import {PopupWithForm} from "../scripts/PopupWithForm.js";
import {PopupWithImage} from "../scripts/PopupWithImage";

import{popupWindow, initialCards, cardListSection, profileName, profileJob} from "../scripts/helpers.js";

const editButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const popupEditButton = document.querySelector(".popup_type_edit");
const closeIcon = document.querySelector(".popup__close-icon");
const formEditButton = document.querySelector(".form-editCard");
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

//Pop-up photos

const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.open();
imagePopup.close();
imagePopup.setEventListeners();


// closeIconPopupWindow.addEventListener("click", () => {
//   closePopup(popupWindow);
// })


//Edit popup

// editButton.addEventListener("click", () => {
    
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileJob.textContent;
//     openPopup(popupEditButton);
    
// })

// closeIcon.addEventListener("click", () => {
//     closePopup(popupEditButton);
// })
    
// formEditButton.addEventListener("submit", function(event){
//   event.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;

//   closePopup(popupEditButton);  
// })

const editPopup = new PopupWithForm(".popup_type_edit");
editPopup.open();
editPopup.close();
editPopup.setEventListeners();

//Add popup

const addCardPopup = new PopupWithForm(".popup_type_add");
addCardPopup.setEventListeners();


// addButton.addEventListener("click", () =>{
    
//     openPopup(popupAddButton);
    
// })

// closeIconAddButton.addEventListener("click", () =>{
//     closePopup(popupAddButton);
// })

//Add cards

const cardList = new Section ({
  items: initialCards,
  renderer: (place) =>{
    const card = new Card(place, ".photos-template",addCardPopup.open);
    const cardElement = card.getCard();
    cardList.addItem(cardElement);
    },
  },
  cardListSection);
 
cardList.renderItems();
 
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



