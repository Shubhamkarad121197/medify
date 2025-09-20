// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          {/* You might want to use an img tag for a logo image here */}
          <div className="logo">Medify</div>
          <p className="copyright-text">
            Copyright ©2023 Surya Nursing Home. All Rights Reserved.
          </p>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Pricing</a></li>
              <li><a href="#">Our Gallery</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Orthology</a></li>
              <li><a href="#">Neurology</a></li>
              <li><a href="#">Dental Care</a></li>
              <li><a href="#">Ophthalmology</a></li>
              <li><a href="#">Cardiology</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Pricing</a></li>
              <li><a href="#">Our Gallery</a></li>
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;