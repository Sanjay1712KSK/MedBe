document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initAnimations();
    initReviewsCarousel();
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

// ── Reviews Carousel ──────────────────────────────────────────────────────────
function initReviewsCarousel() {
    const carousel = document.getElementById('reviewsCarousel');
    const dotsWrap = document.getElementById('reviewsDots');
    const prevBtn = document.getElementById('reviewsPrev');
    const nextBtn = document.getElementById('reviewsNext');

    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll('.review-card'));
    let currentPage = 0;

    // Determine cards per page from viewport
    function getPerPage() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function totalPages() {
        return Math.ceil(cards.length / getPerPage());
    }

    // Build dot buttons
    function buildDots() {
        dotsWrap.innerHTML = '';
        const n = totalPages();
        for (let i = 0; i < n; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === currentPage ? ' active' : '');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Page ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        }
    }

    // Show the right cards for the current page
    function showPage(page) {
        const per = getPerPage();
        const start = page * per;
        const end = start + per;

        cards.forEach((card, idx) => {
            if (idx >= start && idx < end) {
                card.classList.remove('carousel-hidden');
                card.classList.add('carousel-entering');
                setTimeout(() => card.classList.remove('carousel-entering'), 450);
            } else {
                card.classList.add('carousel-hidden');
            }
        });

        // Update dots
        dotsWrap.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === page);
        });

        // Update button states
        prevBtn.disabled = page === 0;
        nextBtn.disabled = page === totalPages() - 1;
    }

    function goTo(page) {
        currentPage = Math.max(0, Math.min(page, totalPages() - 1));
        showPage(currentPage);
    }

    prevBtn.addEventListener('click', () => goTo(currentPage - 1));
    nextBtn.addEventListener('click', () => goTo(currentPage + 1));

    // Re-init on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            currentPage = 0;
            buildDots();
            showPage(currentPage);
        }, 200);
    });

    // Initial render
    buildDots();
    showPage(currentPage);
}

