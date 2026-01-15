// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle navigation menu
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Set active link based on current page
  setActiveNavLink();

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Smooth scroll for internal links
  addSmoothScroll();

  // Add animations on scroll
  observeElements();
});

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Handle contact form submission
function handleContactForm(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Validate form
  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields');
    return;
  }

  // Validate email
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Show success message
  alert('Thank you for your message! I will get back to you soon.');

  // Reset form
  document.getElementById('contactForm').reset();
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Smooth scroll for anchor links
function addSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Observe elements for animations on scroll
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all project cards and skill tags
  document.querySelectorAll('.project-card, .skill-tag, .experience-card, .resume-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Add typing effect (optional)
function typeText(element, text, speed = 50) {
  let index = 0;
  element.innerHTML = '';

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect on hero section if element exists
document.addEventListener('DOMContentLoaded', function () {
  const typingElement = document.getElementById('typing');
  if (typingElement) {
    const texts = [
      'a Full Stack Developer',
      'an AI Enthusiast',
      'a Problem Solver',
      'a Web Developer'
    ];

    let currentIndex = 0;

    function rotateTexts() {
      typeText(typingElement, texts[currentIndex], 50);
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(rotateTexts, 3000);
    }

    rotateTexts();
  }
});

// Scroll-to-top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show scroll-to-top button on scroll
window.addEventListener('scroll', function () {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  }
});

// Add active class to navbar on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (navbar && window.scrollY > 0) {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else if (navbar) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }
});
  closeSidebar();
  updateToggleAria();
}

window.addEventListener('resize', syncSidebarOnResize);
// initial sync
syncSidebarOnResize();

const texts = ["Studying in Web Development and  Programming", "a Student in BSc Computer science at Scott Christian college "];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); 
  } else {
    setTimeout(type, 100);
  }
}

type();
