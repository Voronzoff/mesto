let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__button_type_edit');
let closePopup = popup.querySelector('.popup__button-close');
let profile = document.querySelector('.profile');
let nameProfile = profile.querySelector('.profile__name');
let hobbyProfile = profile.querySelector('.profile__hobby');
let popupFieldName = popup.querySelector('.popup__field_type_name');
let popupFieldHobby = popup.querySelector('.popup__field_type_hobby');
let popupForm = popup.querySelector('.popup__form');

function togglePopup() {
  popup.classList.toggle('popup_opened');
  popupFieldName.value = nameProfile.textContent;
  popupFieldHobby.value = hobbyProfile.textContent;
}

function submitForm(event) {
  event.preventDefault();
  nameProfile.textContent = popupFieldName.value;
  hobbyProfile.textContent = popupFieldHobby.value;
  togglePopup();
};

popupForm.addEventListener('submit', submitForm);
openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
