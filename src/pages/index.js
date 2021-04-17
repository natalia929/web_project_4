import "./index.css";
import profileSrc from "../images/j_cousteau.jpg";

import {FormValidator} from "../components/FormValidator.js";
import {Card} from "../components/Card.js";
import {Section} from "../components/Section.js";


import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupWithImage} from "../components/PopupWithImage.js";

import{popupWindow, initialCards, cardListSection, profileName, profileJob} from "../utils/helpers.js";
import { UserInfo } from "../components/UserInfo";

//Profile images
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

let userInfo = new UserInfo({userName:"Jacques Cousteau", userJob:"Explorer"});
userInfo.setUserInfo();

const editPopup = new PopupWithForm(".popup_type_edit", (formData) =>{
  const userInfo = new UserInfo({userName:formData.name, userJob:formData.details});
  userInfo.setUserInfo();
  editPopup.close();
});

editPopup.setEventListeners();

editButton.addEventListener("click", () => {
    const info = userInfo.getUserInfo();

  nameInput.value = info.userName;

  jobInput.value = info.userJob;
  editPopup.open();
  
})

function createNewCard(place){
  const card = new Card(place, ".photos-template", imagePopup.open);
  return card;
}

//Add popup

function submitAddForm(placeInfo){
  const data = {name: placeInfo.placeName, link: placeInfo.placeUrl};
  const card = createNewCard(data);
  cardList.addItem(card.getCard());
  addCardPopup.close();

}

const addCardPopup = new PopupWithForm(".popup_type_add",submitAddForm);
  addCardPopup.close();


addCardPopup.setEventListeners();

addButton.addEventListener("click", () =>{
    
  addCardPopup.open();
})


//Add cards

const cardList = new Section ({
  items: initialCards,
  renderer: (place) =>{
    const card = createNewCard(place);
    const cardElement = card.getCard();
    cardList.addItem(cardElement);
    },
  },
  cardListSection);
 
cardList.renderItems();
 




