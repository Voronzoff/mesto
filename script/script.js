const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const listElements = document.querySelector('.elements__group');
const templateElement = document.querySelector('#template').content;
const formAddCard = document.querySelector('.popup__form_card');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const openPopupProfile = document.querySelector('.profile__button_type_edit');
const closePopupProfile = popup.querySelector('.popup__button-close_profile');
const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const hobbyProfile = profile.querySelector('.profile__hobby');
const popupFieldName = popup.querySelector('.popup__field_type_name');
const popupFieldHobby = popup.querySelector('.popup__field_type_hobby');
const popupFormProfile = popup.querySelector('.popup__form');
const popupAddCard = document.querySelector('.popup_edit-cards');
const openPopupCards = document.querySelector('.profile__button_type_add');
const closePopupCards = document.querySelector('.popup__button-close_cards');
const closeImage = document.querySelector('.popup__button-close_active');
const popupViewImage = document.querySelector('.popup_view-image');

// функция создание карточки
function createCard(item) {
  const element = templateElement.querySelector('.element-template').cloneNode(true);
  element.querySelector('.element__img-template').src = item.link;
  element.querySelector('.element__text-template').innerText = item.name;

// удаление карточки
  element.querySelector('.element__trash').addEventListener('click', (event) =>{
    element.remove();
  });

// открытие картинки карточки
  element.querySelector('.element__img-template').addEventListener('click', function() {
    document.querySelector('.popup__image').src = element.querySelector('.element__img-template').src;  
    document.querySelector('.popup__title-image_active').textContent = element.querySelector('.element__text-template').innerText;  
    openPopupImage();
  });

// likes
const elementButtonLike = element.querySelector('.element__button-like');
  element.querySelector('.element__button-like').addEventListener('click', function() {
    elementButtonLike.classList.toggle('element__button-like_active');
    });

  return element;
}

// функция вставки карточки на первое место в массиве
function prependCard(item) {
  const elem = createCard(item);
  listElements.prepend(elem);
}

initialCards.forEach(prependCard);

// добавление карточки
function addCard(event) {
  event.preventDefault();
  const cardName = document.querySelector('.popup__field_type_place-name').value;
  const cardLink = document.querySelector('.popup__field_type_place-link').value;
  const item = {
    name: cardName,
    link: cardLink
  }
  prependCard(item);
  closePopupAddCard();
  event.target.reset();
}

formAddCard.addEventListener('submit', addCard);

// функция откр/закр попапа редактирования профиля
function togglePopupProfile() {
  if (!popup.classList.contains('popup_opened')) {
    popupFieldName.value = nameProfile.textContent; 
    popupFieldHobby.value = hobbyProfile.textContent; 
  }
  popupEditProfile.classList.toggle('popup_opened');
}

// функции откр/закр попапа добавления карточки
function openPopupAddCard() {
  popupAddCard.classList.add('popup_opened');
}

function closePopupAddCard() {
  popupAddCard.classList.remove('popup_opened');
}

// функция отправки данных профиля
function submitFormProfile(event) {
  event.preventDefault();
  nameProfile.textContent = popupFieldName.value;
  hobbyProfile.textContent = popupFieldHobby.value;
  togglePopupProfile();
};

popupFormProfile.addEventListener('submit', submitFormProfile);

// открытие/закрытие попапа профиля
openPopupProfile.addEventListener('click', togglePopupProfile);
closePopupProfile.addEventListener('click', togglePopupProfile);

// открытие/закрытие попапа добавления карточки
openPopupCards.addEventListener('click', openPopupAddCard);
closePopupCards.addEventListener('click', closePopupAddCard);

// функцит откр/закр попапа просмотра картинки
function openPopupImage() {
  popupViewImage.classList.add('popup_opened');
}

function closePopupImage() {
  popupViewImage.classList.remove('popup_opened');
}

closeImage.addEventListener('click', closePopupImage);