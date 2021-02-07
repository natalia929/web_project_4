const editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", function(){
    const popup = document.querySelector(".popup");
    popup.classList.add("popup_opened");
    
})

const closeIcon = document.querySelector(".popup__close-icon");
closeIcon.addEventListener("click", function(){
    const popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
    
})

const form = document.querySelector(".form");

form.addEventListener("submit", function(event){
    
    const nameInput = document.querySelector(".form__input_type_name");
    const jobInput = document.querySelector(".form__input_type_job");

    const profileName = document.querySelector(".profile__title");
    const profileJob = document.querySelector(".profile__subtitle");

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    const popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
    
    event.preventDefault(); 
})

