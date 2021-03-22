export const popupWindow = document.querySelector(".popup_type_image");
export const popupImage = popupWindow.querySelector(".popup__image");
export const popupImageName =  popupWindow.querySelector(".popup__image-name");

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
  }

export function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape); 
}

