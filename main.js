const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', function() {
  menuOverlay.classList.toggle('open');
});
