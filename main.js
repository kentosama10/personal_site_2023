// Smooth scrolling effect for navigation links and View Portfolio button
document.querySelectorAll('nav a, .container a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
