import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-1">
            Email:{' '}
            <a
              href="mailto:contact@warmpaws.com"
              className="underline hover:text-yellow-200"
            >
              contact@warmpaws.com
            </a>
          </p>
          <p className="mb-1">
            Phone:{' '}
            <a
              href="tel:+8801234567890"
              className="underline hover:text-yellow-200"
            >
              +880 1234 567 890
            </a>
          </p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Privacy Policy / Legal */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-yellow-100 font-medium text-xs sm:text-sm md:text-base">
        &copy; {new Date().getFullYear()} Warm Paws - Pet Care in Winter. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
