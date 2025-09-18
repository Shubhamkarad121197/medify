import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-white font-bold text-xl mb-4">Medify</h3>
          <p className="text-sm">
            Your trusted partner in healthcare. Providing exceptional service to keep you healthy and happy.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Neurology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dermatology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Contact Form</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <h4 className="text-white font-semibold mb-3">Socials</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        &copy; 2024 Medify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;