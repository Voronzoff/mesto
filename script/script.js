const listElements = document.querySelector('.elements__group');
const popup = document.querySelector('.popup');
const templateElement = document.querySelector('#template').content;
const formAddCard = document.querySelector('.popup__form_card');
const openPopupProfile = document.querySelector('.profile__button_type_edit');
const closePopupProfile = popup.querySelector('.popup__button-close_profile');
const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const hobbyProfile = profile.querySelector('.profile__hobby');
const popupFieldName = popup.querySelector('.popup__field_type_name');
const popupFieldHobby = popup.querySelector('.popup__field_type_hobby');
const popupFormProfile = popup.querySelector('.popup__form');
const openPopupCards = document.querySelector('.profile__button_type_add');
const closePopupCards = document.querySelector('.popup__button-close_cards');
const closeImage = document.querySelector('.popup__button-close_active');
const popupImage = document.querySelector('.popup__image');
const cardName = document.querySelector('.popup__field_type_place-name');
const cardLink = document.querySelector('.popup__field_type_place-link');

// const open/close popup
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupViewImage = document.querySelector('.popup_view-image');
const popupAddCard = document.querySelector('.popup_edit-cards');

// function open/close popup
function openPopup (popup) {
  popup.classList.add('popup_opened');
}
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

// функция создание карточки
function createCard(item) {
  const element = templateElement.querySelector('.element-template').cloneNode(true);
  const elementImgTemplate = element.querySelector('.element__img-template');
  const elementTextTemplate = element.querySelector('.element__text-template');
  const elementTrash = element.querySelector('.element__trash');

  elementImgTemplate.src = item.link;
  elementTextTemplate.innerText = item.name;
  elementImgTemplate.alt = item.name;

// удаление карточки
  elementTrash.addEventListener('click', (event) =>{
    element.remove();
  });

// открытие картинки карточки
  elementImgTemplate.addEventListener('click', function() {
    popupImage.src = elementImgTemplate.src;  
    document.querySelector('.popup__title-image_active').textContent = elementTextTemplate.innerText;
    popupImage.alt = elementTextTemplate.innerText;  
    openPopup(popupViewImage);
  });

  // закрытие картинки карточки
closeImage.addEventListener('click', function() {
  closePopup(popupViewImage);
});

// likes
const elementButtonLike = element.querySelector('.element__button-like');
  elementButtonLike.addEventListener('click', function() {
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
  const item = {
    name: cardName.value,
    link: cardLink.value,
    alt: cardName.value
  }
  prependCard(item);
  closePopup(popupAddCard);
  event.target.reset();
}

// закрытие карточки
openPopupCards.addEventListener('click', function(){
  openPopup(popupAddCard);
});
closePopupCards.addEventListener('click', function(){
  closePopup(popupAddCard);
});

formAddCard.addEventListener('submit', addCard);

// функция отправки данных профиля
function submitFormProfile(event) {
  event.preventDefault();
  nameProfile.textContent = popupFieldName.value;
  hobbyProfile.textContent = popupFieldHobby.value;
  closePopup(popupEditProfile);
};

// отправка данных профиля
popupFormProfile.addEventListener('submit', submitFormProfile);

// открытие/закрытие попапа профиля
openPopupProfile.addEventListener('click', function(){
  popupFieldName.value = nameProfile.textContent; 
  popupFieldHobby.value = hobbyProfile.textContent; 
  openPopup(popupEditProfile);
});

closePopupProfile.addEventListener('click', function(){
  closePopup(popupEditProfile);
});