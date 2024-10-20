

const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');


openPopupBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});

closePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
