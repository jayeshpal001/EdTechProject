import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-purple-400">MyApp</h2>
          <p className="text-sm text-gray-300 mb-4">
            Learn anywhere, anytime. Premium tech courses with high-quality content & 3-month access.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact Us</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-white">Terms & Conditions</NavLink></li>
            <li><NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-300 mb-1">Email: jayashpal5@gmail.com</p>
          <p className="text-gray-300 mb-1">Phone: +91 9179898569</p>
          <p className="text-gray-300">Address: Indore, MP, India</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
