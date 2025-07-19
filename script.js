//preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden');
});

// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Search form validation
document.getElementById('search-form').addEventListener('submit', (e) => {
  const location = document.getElementById('location').value.trim();
  if(location === "") {
    e.preventDefault();
    alert("Please enter a location.");
  }
});

// Newsletter form validation
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  const email = document.getElementById('newsletter-email').value.trim();
  if(email === "") {
    e.preventDefault();
    alert("Please enter your email.");
  }
});

