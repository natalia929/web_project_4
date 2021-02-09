let editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", function(){
    let popup = document.querySelector(".popup");
    popup.classList.add("popup_opened");
    
})

let closeIcon = document.querySelector(".popup__close-icon");
closeIcon.addEventListener("click", function(){
    let popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
    
})

let form = document.querySelector(".form");

form.addEventListener("submit", function(event){
    
    let nameInput = document.querySelector(".form__input_type_name");
    let jobInput = document.querySelector(".form__input_type_job");

    let profileName = document.querySelector(".profile__title");
    let profileJob = document.querySelector(".profile__subtitle");

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    let popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
    
    event.preventDefault(); 
})

let hearts = document.querySelectorAll('.element__heart-icon');


hearts.forEach(x => x.addEventListener('click', (event) => {
    let style = event.target.style;

    if (style.backgroundImage) {
        style.backgroundImage = '';
    } else {
        style.backgroundImage = 'url("images/heart_checked.svg")';
    }
}));

