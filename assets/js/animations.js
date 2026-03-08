/**
 * MedBe Medical Animations - animations.js
 * Handles: scroll-triggered sequences, particles, mission sequence
 */

document.addEventListener('DOMContentLoaded', () => {
    initMedicalParticles();
    initMissionSequence();
    initValueCardsSequence();
    initSectionAccentLines();
});

/* ── 1. FLOATING BACKGROUND PARTICLES ─────────────────────────── */
function initMedicalParticles() {
    // Capsule SVG path (simple pill shape)
    const capsulePath = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="10" rx="5"/><line x1="12" y1="7" x2="12" y2="17"/></svg>`;
    // Cross
    const crossPath = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
    // Dot
    const dotPath = `<svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>`;

    const icons = [capsulePath, crossPath, dotPath];

    // Only add to sections that have a .med-particles-canvas
    document.querySelectorAll('.med-particles-canvas').forEach(canvas => {
        const count = 8;
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = 'med-particle';
            el.innerHTML = icons[Math.floor(Math.random() * icons.length)];

            const left = Math.random() * 95;
            const top = 10 + Math.random() * 80;
            const duration = 12 + Math.random() * 14; // 12–26s
            const delay = Math.random() * 10;
            const opacity = 0.05 + Math.random() * 0.07;

            el.style.left = `${left}%`;
            el.style.top = `${top}%`;
            el.style.setProperty('--p-opacity', opacity);
            el.style.animationDuration = `${duration}s`;
            el.style.animationDelay = `${delay}s`;

            canvas.appendChild(el);
        }
    });
}

/* ── 2. MISSION SEQUENCE REVEAL ────────────────────────────────── */
function initMissionSequence() {
    const seq = document.querySelector('.mission-sequence');
    if (!seq) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                seq.classList.add('seq-visible');
                obs.unobserve(seq);
            }
        });
    }, { threshold: 0.4 });

    obs.observe(seq);
}

/* ── 3. VALUE CARDS STAGGERED REVEAL ───────────────────────────── */
function initValueCardsSequence() {
    const grid = document.querySelector('.principles-grid');
    if (!grid) return;

    // Pre-hide cards so the CSS animation takes over
    grid.querySelectorAll('.principle-card').forEach(card => {
        card.style.opacity = '0';
    });

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                grid.classList.add('seq-revealed');
                obs.unobserve(grid);
            }
        });
    }, { threshold: 0.15 });

    obs.observe(grid);
}

/* ── 4. SECTION ACCENT LINES ────────────────────────────────────── */
function initSectionAccentLines() {
    document.querySelectorAll('.section-accent-line').forEach(line => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    line.classList.add('is-animated');
                    obs.unobserve(line);
                }
            });
        }, { threshold: 0.5 });
        obs.observe(line);
    });
}
