const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

// Add event listener to hamburger button to toggle menu
hamburger.addEventListener('click', function() {
  menuOverlay.classList.toggle('open');
});

// Add event listener to close button to hide menu
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function() {
  menuOverlay.classList.remove('open');
});
