// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Contact Form Handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactConfirmation = document.getElementById('contactConfirmation');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show confirmation message
            contactForm.style.display = 'none';
            contactConfirmation.style.display = 'block';
            
            // In a real application, you would send the data to a server here
            console.log('Contact form details:', {
                name, email, subject, message
            });
        });
    }
}

// Update the DOMContentLoaded event to include new functions
document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
    
    // Only setup gallery if on gallery page
    if (document.querySelector('.gallery-grid')) {
        setupImageGallery();
    }
    
    // Add current year to footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});