// извлекаем попап-элемент, кнопку навигации, кнопку закрытия
const popupElement = document.querySelector('.popup');
const navButton = document.querySelector('.header__nav-item');
const closeButton = popupElement.querySelector('body .popup__close-button');
// const header = document.querySelector('header');
//код клавиши Esc для наглядности
const ESC_KEY_CODE = 27;

//функции открыть и закрыть попап
function openPopup() {
  //добавить класс в список классов элемента popup_opened
  popupElement.classList.add('popup_opened');
  //добавить обработчик закрытия на Esc
  document.addEventListener('keyup', onDocumentKeyUp)
}
function closePopup() {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp)
}
//функция для слушателя клавиатуры, закрыть на 27 
//event содержит информацию о прошедшем событии 
function onDocumentKeyUp(event){
  if (event.keyCode === ESC_KEY_CODE){
    closePopup()
  }
}
//слушатель события нажатия на кнопку выполнит функцию openPopup
navButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);