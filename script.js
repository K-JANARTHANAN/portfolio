document.addEventListener('DOMContentLoaded', () => {
    const skillsList = document.getElementById('skills-list');
    skillsList.querySelectorAll('li').forEach((li, index) => {
      // Animation
      li.style.opacity = 0;
      setTimeout(() => {
        li.style.transition = 'opacity 1s ease';
        li.style.opacity = 1;
      }, index * 300);
  
      // Click event
      li.addEventListener('click', () => {
        li.classList.toggle('clicked');
      });
    });
  
    // Contact form submit
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting me!');
      contactForm.reset();
    });
  });
    

  // Toggle the active class on navbar
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});
