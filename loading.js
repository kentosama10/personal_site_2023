// Get references to the loading screen and loading bar
const loaderContainer = document.getElementById('loader-container');
const loadingBar = document.getElementById('loading-bar');

// Show the loading screen and add the no-scroll class to the body element
function showLoadingScreen() {
  loaderContainer.style.display = 'flex';
  document.body.classList.add('no-scroll');
}

// Hide the loading screen and remove the no-scroll class from the body element
function hideLoadingScreen() {
  loaderContainer.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

// Simulate a loading process
function simulateLoading() {
  showLoadingScreen();

  // Simulate a 1-second loading process
  setTimeout(() => {
    hideLoadingScreen();
  }, 1000);
}

// Call the simulateLoading function when the page is loaded
window.addEventListener('load', simulateLoading);

function showContainer(containerId) {
  setTimeout(function() {
    document.getElementById("loader-container").classList.add("hide");
    document.getElementById(containerId).classList.add("show");
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  showContainer("home-page-container");
  showContainer("about-page-container");
  showContainer("contact-page-container");
});

