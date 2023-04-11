window.addEventListener("load", function(){
  const loader = document.getElementById("loader-container");
  const container = document.getElementById("home-page-container");
  const loadingBar = document.getElementById("loading-bar");
  let width = 0;
  const loaderFadeOutDuration = 1000;
  const containerFadeInDuration = 1000;

  function animateLoadingBar(timestamp) {
    if (width >= 100) {
      setTimeout(function(){
        loader.style.transition = `opacity ${loaderFadeOutDuration}ms`;
        loader.style.opacity = "0";
        container.style.transition = `opacity ${containerFadeInDuration}ms`;
        container.style.opacity = "1";
        requestAnimationFrame(function(){
          loader.style.display = "none";
        });
      }, 500);
    } else {
      width += 1;
      loadingBar.style.width = width + "%";
      requestAnimationFrame(animateLoadingBar);
    }
  }
  requestAnimationFrame(animateLoadingBar);
});
