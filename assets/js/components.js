// Reusable Navbar and Footer Components

class Navbar extends HTMLElement {
  connectedCallback() {
      const activePage = this.getAttribute('active') || 'home';
      
      this.innerHTML = `
          <nav class="navbar" id="navbar">
              <div class="container nav-container">
                  <a href="index.html" class="logo">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#00A651" stroke-width="2"/>
                          <path d="M12 7V17M7 12H17" stroke="#00A651" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      Med<span>Be</span>
                  </a>
                  <div class="nav-links">
                      <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
                      <a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About Us</a>
                      <a href="vision.html" class="${activePage === 'vision' ? 'active' : ''}">Vision & Mission</a>
                      <a href="#contact" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
                  </div>
              </div>
          </nav>
      `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
          <footer class="footer animate-fade-up">
              <div class="container">
                  <div class="footer-grid">
                      <div class="footer-col">
                          <h3>MedBe Pharmacy</h3>
                          <p>Care Beyond Medicine. Your trusted neighborhood healthcare partner dedicated to providing authentic medicines and professional guidance.</p>
                      </div>
                      <div class="footer-col">
                          <h3>Quick Links</h3>
                          <ul class="footer-links">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="vision.html">Vision & Mission</a></li>
                              <li><a href="#services">Our Services</a></li>
                          </ul>
                      </div>
                      <div class="footer-col" id="contact">
                          <h3>Contact Information</h3>
                          <ul class="footer-links">
                              <li><a href="mailto:info@medbepharmacy.com">info@medbepharmacy.com</a></li>
                              <li><a href="tel:+1234567890">+1 234 567 890</a></li>
                              <li><p>123 Healthcare Avenue,<br>Kochi, Kerala 682001</p></li>
                          </ul>
                      </div>
                      <div class="footer-col">
                          <h3>Operating Hours</h3>
                          <p>Monday - Friday:<br>8:00 AM - 10:00 PM</p>
                          <p>Saturday - Sunday:<br>9:00 AM - 9:00 PM</p>
                      </div>
                  </div>
                  <div class="footer-bottom">
                      <p>&copy; ${new Date().getFullYear()} MedBe Pharmacy. All rights reserved.</p>
                  </div>
              </div>
          </footer>
      `;
  }
}

// Register custom elements
customElements.define('app-navbar', Navbar);
customElements.define('app-footer', Footer);
