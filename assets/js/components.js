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
                  </div>
                  <div class="footer-bottom">
                      <p>&copy; ${new Date().getFullYear()} Me<span class="brand-db">db</span>e Pharmacy. All rights reserved.</p>
                  </div>
              </div>
          </footer>
      `;
    }
}

// Register custom elements
customElements.define('app-navbar', Navbar);
customElements.define('app-footer', Footer);
