/* js/script.js */
// Smooth scroll for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Collapse navbar on link click (for mobile)
const navLinks = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navCollapse.classList.contains('show')) new bootstrap.Collapse(navCollapse).toggle();
  });
});