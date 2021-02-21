const editButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const popupEditButton = document.querySelector(".popup_type_edit");
const closeIcon = document.querySelector(".popup__close-icon");
const form = document.querySelector(".form");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const addButton = document.querySelector(".profile__add-button");
const photosTemplate = document.querySelector(".photos-template").content.querySelector('.element');
const photosList = document.querySelector(".elements__list");
const popupAddButton = document.querySelector(".popup_type_add")
const closeIconupAddButton = popupAddButton.querySelector(".popup__close-icon")
const formAddButton = document.querySelector(".form-addCard");
const place = document.querySelector(".form__input_type_title");
const url = document.querySelector(".form__input_type_link");


function openPopup(model){
    model.classList.add("popup_opened");
}

function closePopup(model){
    model.classList.remove("popup_opened");
    
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
    


form.addEventListener("submit", function(event){
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();

    event.preventDefault(); 
})

//Add button

addButton.addEventListener("click", function(){
    
    openPopup(popupAddButton);
    
})

closeIconupAddButton.addEventListener("click", function(){
    closePopup(popupAddButton);
})




//Cards with initial photos
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

initialCards.forEach(photo =>{
    const photosElement = photosTemplate.cloneNode(true);
    const photosImage = photosElement.querySelector(".element__image");
    const photosName = photosElement.querySelector(".element__name");
    const photosHeart = photosElement.querySelector(".element__heart-icon");
    const photosDelete = photosElement.querySelector(".element__delete-button");

    photosImage.src = photo.link;
    photosName.textContent = photo.name;

    photosHeart.addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__heart-icon_active")
    })

    photosDelete.addEventListener("click", () =>{
        photosElement.remove()
    })

    photosList.append(photosElement);

})
 


//Add cards with more photos
function addCard(placeLink, placeName){
    const photosElement = photosTemplate.cloneNode(true);
    photosElement.querySelector(".element__image").src = placeLink;
    photosElement.querySelector(".element__name").textContent = placeName;
    const photosHeart = photosElement.querySelector(".element__heart-icon");
    photosList.prepend(photosElement);

    photosHeart.addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__heart-icon_active")
    })
    
    const photosDelete = photosElement.querySelector(".element__delete-button");
    photosDelete.addEventListener("click", () =>{
        photosElement.remove()
    })
}

formAddButton.addEventListener("submit", function(event){
    const place = document.querySelector(".form__input_type_title");
    const url = document.querySelector(".form__input_type_link");
    addCard(url.value, place.value);
    closePopup(popupAddButton);

    url.value = "";
    place.value = "";
    
    event.preventDefault(); 
})