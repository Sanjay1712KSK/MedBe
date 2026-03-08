document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initAnimations();
});

// Handle Navbar Background on Scroll
function initNavbar() {
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();
}

// Initialize Intersection Observer for Animations
function initAnimations() {
    // Elements to animate
    const animatedElements = document.querySelectorAll(`
      .animate-fade-up, 
      .animate-slide-left, 
      .animate-slide-right, 
      .animate-scale-in
  `);

    if (animatedElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before the element comes into view
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-animated');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}
