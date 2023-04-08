const menuText = document.querySelector('.menu-text');
const menuOverlay = document.querySelector('.menu-overlay');

// Add event listener to hamburger button to toggle menu
menuText.addEventListener('click', function() {
  menuOverlay.classList.toggle('open');
});

// Add event listener to close button to hide menu
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function() {
  menuOverlay.classList.remove('open');
});

const scrollButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.opacity = "1";
  } else {
    scrollButton.style.opacity = "0";
  }
});

scrollButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  scrollButton.classList.add("show");
} else {
  scrollButton.classList.remove("show");
}

