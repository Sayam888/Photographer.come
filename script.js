// Initialize AOS animation
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });
});

// Preloader
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hide-preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Gallery Filter
const filterBtns = document.querySelectorAll(".filter");
const images = document.querySelectorAll(".image");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    images.forEach(img => {
      if (category === "all" || img.getAttribute("data-category") === category) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// Dropdown Menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// Close menu when clicking outside
window.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const dotsButton = document.querySelector('.dots-button');
  
  if (!dotsButton.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove('show');
  }
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Thank you for your message! We will contact you soon.');
  
  // Reset form
  this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
      
      // Close menu if open
      document.getElementById('menu').classList.remove('show');
    }
  });
});