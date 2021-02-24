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
const popupWindow = document.querySelector(".popup_type_image");
const closeIconPopupWindow = popupWindow.querySelector(".popup__close-icon");


function openPopup(model){
    model.classList.add("popup_opened");
}

function closePopup(model){
    model.classList.remove("popup_opened");
    
}

function activeHeart(evt) {
  evt.target.classList.toggle("element__heart-icon_active");
}

//Edit button
editButton.addEventListener("click", function(){
    
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEditButton);
    
})

closeIcon.addEventListener("click", function(){
    closePopup(popupEditButton);
})
    
formEditButton.addEventListener("submit", function(event){
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditButton);  
})

//Add button

addButton.addEventListener("click", function(){
    
    openPopup(popupAddButton);
    
})

closeIconAddButton.addEventListener("click", function(){
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

  //Add cards 

function addCard(placeLink, placeName){
  const photosElement = photosTemplate.cloneNode(true);
  photosElement.querySelector(".element__image").src = placeLink;
  photosElement.querySelector(".element__image").alt = `Photo of ${placeName}`;
  photosElement.querySelector(".element__name").textContent = placeName;
  

  const photosHeart = photosElement.querySelector(".element__heart-icon");
  photosHeart.addEventListener("click", activeHeart);
  
  const photosDelete = photosElement.querySelector(".element__delete-button");
  photosDelete.addEventListener("click", () =>{
    photosElement.remove()
  })

  const popupImage = photosElement.querySelector(".element__image");
  popupImage.addEventListener("click", () => {
    popupWindow.querySelector(".popup__image").src = placeLink;
    popupWindow.querySelector(".popup__image").alt = `Photo of ${placeName}`;
    popupWindow.querySelector(".popup__image-name").textContent = placeName
    openPopup(popupWindow);
  
  })

  return photosElement;
}

//Add initial photos
initialCards.forEach(photo =>{
    const card = addCard(photo.link, photo.name);
    photosList.prepend(card);
});
 
formAddButton.addEventListener("submit", function(event){
  event.preventDefault(); 
  const card = addCard(url.value, place.value);
  photosList.prepend(card);
  closePopup(popupAddButton);

  url.value = "";
  place.value = "";
    
})

//Close pop-up photos

closeIconPopupWindow.addEventListener("click", function(){
  closePopup(popupWindow);
})

