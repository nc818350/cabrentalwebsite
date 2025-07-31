//preloader//

window.addEventListener("load", () => {
    // Show text after car moves
    const preloader = document.getElementById("preloader");

    // Wait for text animation (3s car + 1s text = 4s)
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 4500); // 4.5s total delay
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

