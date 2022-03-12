let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__button_change_edit');
let closePopup = popup.querySelector('.popup__button-close');
let profile = document.querySelector('.profile');
let nameProfile = profile.querySelector('.profile__name');
let hobbyProfile = profile.querySelector('.profile__hobby');
let popupFieldName = popup.querySelector('.popup__field_name_edit');
let popupFieldHobby = popup.querySelector('.popup__field_hobby_edit');
let popupForm = popup.querySelector('.popup__form');

popupFieldName.value = nameProfile.textContent;
popupFieldHobby.value = hobbyProfile.textContent;

function togglePopup() {
  popup.classList.toggle('popup_opened');
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
