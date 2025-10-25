import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaReddit,
} from 'react-icons/fa';
import { SiTiktok, SiThreads } from 'react-icons/si';
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdEventAvailable,
} from 'react-icons/md';
import FooterBg from '../assets/footer-background.png';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, link: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaInstagram />, link: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaTwitter />, link: 'https://twitter.com', name: 'Twitter' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <SiTiktok />, link: 'https://tiktok.com', name: 'TikTok' },
    { icon: <SiThreads />, link: 'https://threads.net', name: 'Threads' },
    { icon: <FaPinterest />, link: 'https://pinterest.com', name: 'Pinterest' },
    { icon: <FaReddit />, link: 'https://reddit.com', name: 'Reddit' },
  ];

  const policies = [
    { name: 'Privacy Policy', link: '/privacy-policy' },
    { name: 'Terms of Service', link: '/terms-of-service' },
    { name: 'Refund Policy', link: '/refund-policy' },
    { name: 'Shipping Policy', link: '/shipping-policy' },
    { name: 'About', link: '/about' },
  ];

  return (
    <footer
      className="w-full text-white py-12 shadow-inner bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Info - Left */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="flex items-center gap-2 mb-1">
            <MdEmail className="text-xl" />
            <a
              href="mailto:contact@warmpaws.com"
              className="underline hover:text-yellow-200"
            >
              contact@warmpaws.com
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <MdPhone className="text-xl" />
            <a
              href="tel:+8801234567890"
              className="underline hover:text-yellow-200"
            >
              +880 1234 567 890 , <br />
              +880 1234 567 891
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-xl" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEventAvailable className="text-xl" />
            <span>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</span>
          </div>
        </div>

        {/* Social Icons - Center */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-center">Follow Us</h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-yellow-200"
              >
                <div className="text-3xl">{social.icon}</div>
                <span className="text-sm mt-1">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal / Policies - Right */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            {policies.map(policy => (
              <li key={policy.name}>
                <Link
                  to={policy.link}
                  className="hover:underline hover:text-yellow-200 transition-colors"
                >
                  {policy.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" bg-opacity-50 text-center mt-10 text-yellow-100 font-medium text-xs sm:text-sm md:text-base px-4">
        &copy; Warm Paws - Pet Care in Winter. All rights reserved -{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
