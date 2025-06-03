// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Removed theme switching functionality since we're using Netflix's dark theme exclusively

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--dark-bg)';
        navbar.style.boxShadow = '0 4px 8px var(--shadow-color)';
    } else {
        navbar.style.background = 'var(--dark-bg)';
        navbar.style.boxShadow = '0 2px 4px var(--shadow-color)';
    }
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

// Open lightbox when clicking on image
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        lightboxImg.src = this.getAttribute('href');
        lightbox.style.display = 'flex';
    });
});

// Close lightbox
const closeLightboxFunc = () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
};

closeLightbox.addEventListener('click', closeLightboxFunc);

// Close lightbox when clicking outside
lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightboxFunc();
    }
});

// Certification scrolling
function scrollCertifications(direction) {
    const container = document.querySelector('.certification-container');
    const items = document.querySelectorAll('.certification-item');
    const itemWidth = items[0].offsetWidth + 20; // item width + gap
    
    if (direction === 'prev') {
        container.scrollLeft -= itemWidth;
    } else {
        container.scrollLeft += itemWidth;
    }
}
