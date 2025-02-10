// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });
}

// Smooth scrolling with mobile menu close
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mobileNav) {
            mobileNav.classList.add('hidden');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic parallax effect optimized for mobile
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    requestAnimationFrame(() => {
        document.querySelectorAll('.parallax').forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Apply fade-in animations
document.querySelectorAll('section').forEach((section) => {
    section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(section);
});

// Navigation scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        if (window.scrollY > 50) {
            nav.classList.add('backdrop-blur-lg', 'border-b', 'border-gray-800');
        } else {
            nav.classList.remove('backdrop-blur-lg', 'border-b', 'border-gray-800');
        }
    });
});
