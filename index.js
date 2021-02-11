let editButton = document.querySelector(".profile__edit-button");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");
let popup = document.querySelector(".popup");
let closeIcon = document.querySelector(".popup__close-icon");
let form = document.querySelector(".form");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
let hearts = document.querySelectorAll('.element__heart-icon');

editButton.addEventListener("click", function(){
    
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add("popup_opened");
    
})

function closePopup(){
    popup.classList.remove("popup_opened");
}


closeIcon.addEventListener("click", function(){
    closePopup();
})
    


form.addEventListener("submit", function(event){
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();

    event.preventDefault(); 
})


hearts.forEach(x => x.addEventListener('click', (event) => {
    let style = event.target.style;

    if (style.backgroundImage) {
        style.backgroundImage = '';
    } else {
        style.backgroundImage = 'url("images/heart_checked.svg")';
    }
}));


