// Track scroll direction
let lastScroll = 0;
let scrollDirection = 'down';

const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    scrollDirection = currentScroll > lastScroll ? 'down' : 'up';
    lastScroll = currentScroll;
};
window.addEventListener('scroll', handleScroll);

// Enhanced Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const element = entry.target;
        const wasVisible = element.classList.contains('active');
        
        if (entry.isIntersecting) {
            element.classList.add('active');
        } else if (scrollDirection === 'up' && wasVisible) {
            element.classList.remove('active');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all animated elements
document.querySelectorAll('.scroll-animation').forEach((el) => {
    observer.observe(el);
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

// Hero Entrance Animation
const heroContent = document.querySelector('.hero .container');
if (heroContent) {
    heroContent.style.opacity = '0';
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
}

// Form Handling
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will respond shortly.');
    e.target.reset();
});