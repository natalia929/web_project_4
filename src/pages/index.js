import "./index.css";
import logoSrc from "../images/logo.svg";
import profileSrc from "../images/j_cousteau.jpg"

import {FormValidator} from "../components/FormValidator.js";
import {Card} from "../components/Card.js";
import {Section} from "../components/Section.js";


import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";

import{popupWindow, initialCards, cardListSection, profileName, profileJob} from "../components/helpers.js";

//Logo and profile images
const logoImage = document.getElementById("image-logo");
logoImage.src = logoSrc; 

const profileImage = document.getElementById("image-profile");
profileImage.src = profileSrc;

//
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
imagePopup.setEventListeners();


closeIconPopupWindow.addEventListener("click", () => {
  imagePopup.close();
})


//Edit popup form

function submitEditForm (){
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  editPopup.close();  
}

const editPopup = new PopupWithForm(".popup_type_edit", submitEditForm);

editPopup.setEventListeners();

editButton.addEventListener("click", () => {
    
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editPopup.open();
  
})

//Add popup

function submitAddForm(){
  const data = {name: place.value, link: url.value};
  const card = new Card(data, ".photos-template", imagePopup.open);
  photosList.prepend(card.getCard());
  addCardPopup.close();

}

const addCardPopup = new PopupWithForm(".popup_type_add",submitAddForm);
addCardPopup.setEventListeners();

addButton.addEventListener("click", () =>{
    
  addCardPopup.open();
})


//Add cards

const cardList = new Section ({
  items: initialCards,
  renderer: (place) =>{
    const card = new Card(place, ".photos-template",imagePopup.open);
    const cardElement = card.getCard();
    cardList.addItem(cardElement);
    },
  },
  cardListSection);
 
cardList.renderItems();
 
//Close popup clicing on the overlay
const popups = Array.from(document.querySelectorAll(".popup"));

popups.forEach((popup) => {
  popup.addEventListener("click", evt => {
    if(evt.target.classList.contains("popup")){
      imagePopup.close();
      addCardPopup.close();
    } 
  });
})



