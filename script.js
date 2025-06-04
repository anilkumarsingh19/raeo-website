// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
npm i @vercel/analytics
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active'); // Close menu on mobile after click
    }
  });
});

// Contact form feedback
const contactForm = document.querySelector('.contact-form');
const feedback = document.querySelector('.form-feedback');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  feedback.style.display = 'block';
  feedback.textContent = 'Thank you for reaching out! We will get back to you soon.';
  contactForm.reset();
  setTimeout(() => { feedback.style.display = 'none'; }, 4000);
});

// Improve mobile menu accessibility
menuToggle.setAttribute('aria-label', 'Open navigation menu');
menuToggle.setAttribute('tabindex', '0');
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    navLinks.classList.toggle('active');
  }
});

// Ensure header animation triggers on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header')?.classList.add('navbar-animate');
}); 
