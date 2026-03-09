// Reusable Navbar and Footer Components

class Navbar extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active') || 'home';

        this.innerHTML = `
          <nav class="navbar" id="navbar">
              <div class="container nav-container">
                  <div class="nav-links">
                      <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
                      <a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About Us</a>
                      <a href="vision.html" class="${activePage === 'vision' ? 'active' : ''}">Vision &amp; Mission</a>
                      <a href="index.html#contact" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
                  </div>
                  <a href="index.html" class="logo" aria-label="MedBe Pharmacy Home">
                      <img src="logo.png" alt="MedBe Pharmacy Kochi Logo" loading="lazy" width="150" height="50" style="height: 50px; width: auto; object-fit: contain;">
                  </a>
                  <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
                      <span></span>
                      <span></span>
                      <span></span>
                  </button>
              </div>
          </nav>

          <!-- Mobile full-screen menu overlay -->
          <div class="nav-mobile-menu" id="nav-mobile-menu" role="dialog" aria-modal="true">
              <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
              <a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About Us</a>
              <a href="vision.html" class="${activePage === 'vision' ? 'active' : ''}">Vision &amp; Mission</a>
              <a href="index.html#contact" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
          </div>
      `;

        // Hamburger toggle logic
        const hamburger = this.querySelector('#nav-hamburger');
        const mobileMenu = document.getElementById('nav-mobile-menu');

        const closeMenu = () => {
            hamburger.classList.remove('is-open');
            mobileMenu.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        const openMenu = () => {
            hamburger.classList.add('is-open');
            mobileMenu.classList.add('is-open');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        };

        hamburger.addEventListener('click', () => {
            if (hamburger.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close on any link click inside the overlay
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <footer class="footer animate-fade-up">
              <div class="container">
                  <div class="footer-grid">
                      <div class="footer-col">
                          <h3>Me<span class="brand-db">db</span>e Pharmacy</h3>
                          <p>Care Beyond Medicine. Your trusted neighborhood healthcare partner dedicated to providing authentic medicines and professional guidance.</p>
                      </div>
                      <div class="footer-col">
                          <h3>Quick Links</h3>
                          <ul class="footer-links">
                              <li><a href="index.html">MedBe Pharmacy Kochi Home</a></li>
                              <li><a href="about.html">About Our Pharmacy</a></li>
                              <li><a href="vision.html">Vision & Mission</a></li>
                              <li><a href="index.html#services">Our Pharmacy Services</a></li>
                          </ul>
                      </div>
                      <div class="footer-col" id="contact">
                          <h3>Contact Information</h3>
                          <ul class="footer-links">
                              <li><a href="mailto:info@medbepharmacy.com">info@medbepharmacy.com</a></li>
                              <li><a href="https://wa.me/919988443038" target="_blank" rel="noopener noreferrer">WhatsApp: +91 99884 43038</a></li>
                              <li><a href="tel:+919988446774">Call: +91 99884 46774</a></li>
                              <li><a href="https://maps.app.goo.gl/WDmPuEJdT8tqZ5Nn8" target="_blank" rel="noopener noreferrer" style="line-height:1.5; display:inline-block; margin-top:10px;">Metro Pillar Number : 775, Tharun Tower, G -Floor,<br>Sahodaran Ayyappan Rd, Kochi,<br>Ernakulam, Kerala 682020</a></li>
                          </ul>
                      </div>
                      <div class="footer-col">
                          <h3>Operating Hours</h3>
                          <p>Monday - Saturday:<br>9:00 AM - 11:00 PM</p>
                          <p>Sunday:<br>10:00 AM - 10:00 PM</p>
                      </div>
                      <div class="footer-col" style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">
                          <h3 style="margin-bottom: 0;">Connect With Us</h3>
                          <a href="https://www.instagram.com/medbe_pharmacy/" target="_blank" rel="noopener noreferrer" class="social-icon-btn instagram-btn" aria-label="Follow us on Instagram" style="margin-top: 0; width: 44px; height: 44px;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                          </a>
                      </div>
                  </div>
                  <div class="footer-bottom">
                      <div class="footer-dev-credit">
                          <span>Developed with lots of love and the same kind of passion in a different field.</span>
                          <div class="footer-dev-links" style="display: flex; gap: 12px; align-items: center; margin-left: 4px;">
                              <a href="https://github.com/Sanjay1712KSK" target="_blank" rel="noopener noreferrer" aria-label="Developer GitHub Profile">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                  </svg>
                              </a>
                          </div>
                      </div>
                      <p class="footer-copyright">&copy; ${new Date().getFullYear()} Me<span class="brand-db">db</span>e Pharmacy. All rights reserved.</p>
                  </div>
              </div>
          </footer>
      `;
    }
}

// Register custom elements
customElements.define('app-navbar', Navbar);
customElements.define('app-footer', Footer);
