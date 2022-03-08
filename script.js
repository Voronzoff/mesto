let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__button_edit');
let closePopup = popup.querySelector('.popup__close');

function togglePopup() {
  popup.classList.toggle('popup__opened');
}

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);

popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    togglePopup()
  }
});

let profile = document.querySelector('.profile');
let nameProfile = profile.querySelector('.profile__name');
let hobbyProfile = profile.querySelector('.profile__hobby');
let popupFieldName = popup.querySelector('.popup__field_name');
let popupFieldHobby = popup.querySelector('.popup__field_hobby');

let popupForm = popup.querySelector('.popup__form');

function submitForm(event) {
  event.preventDefault();
  nameProfile.textContent = popupFieldName.value;
  hobbyProfile.textContent = popupFieldHobby.value;
  togglePopup();
};

popupForm.addEventListener('submit', submitForm);

let elements = document.querySelector('.elements');
let elementHeart = elements.querySelectorAll('.element__like');

function clickElementHeart() {
  elementHeart.classList.toggle('element__like_active');  
  }

for (let i = 0; i < elementHeart.length; i++) {
  elementHeart[i].addEventListener('click', function(){
    elementHeart[i].classList.toggle('element__like_active');
  });
};