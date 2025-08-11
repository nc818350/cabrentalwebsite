//preloader//

window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      preloader.style.transition = 'opacity 0.5s ease';
      preloader.style.opacity = '0';

      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500); // match fade-out duration
    }, 1600); // wait for car animation (1.5s) + slight buffer
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

// Fleet 

 const vehicleType = document.getElementById('vehicleType');
    const fleetGrid = document.getElementById('fleetGrid');

    vehicleType.addEventListener('change', function () {
      const selected = this.value;
      const cards = fleetGrid.querySelectorAll('.car-card');
      cards.forEach(card => {
        card.style.display = selected === 'all' || card.dataset.type === selected ? 'block' : 'none';
      });
    });

    function openPopup(title, desc) {
      document.getElementById('popupTitle').innerText = title;
      document.getElementById('popupDesc').innerText = desc;
      document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }

