window.addEventListener("load", function(){
  const loader = document.getElementById("loader-container");
  const container = document.getElementById("home-page-container");
  const loadingBar = document.getElementById("loading-bar");
  let width = 0;
  const interval = setInterval(function(){
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(function(){
        loader.style.opacity = "0";
        setTimeout(function(){
          loader.style.display = "none";
          container.style.opacity = "1";
          document.body.style.overflow = "auto";
        }, 0);
      }, 500);
    } else {
      width += 5;
      loadingBar.style.width = width + "%";
    }
  }, 10);
});
