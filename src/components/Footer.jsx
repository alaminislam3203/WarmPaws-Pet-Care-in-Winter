import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaPaw,
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
    {
      icon: <FaFacebook />,
      link: 'https://www.facebook.com/alamin320',
      name: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/alamin_codes/',
      name: 'Instagram',
    },
    {
      icon: <FaTwitter />,
      link: 'https://x.com/alamin_codes',
      name: 'Twitter',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/alaminislam3203/',
      name: 'LinkedIn',
    },
    {
      icon: <SiTiktok />,
      link: 'https://www.tiktok.com/@alamin_chowdhury_102',
      name: 'TikTok',
    },
    {
      icon: <SiThreads />,
      link: 'https://www.threads.com/@alamin_codes',
      name: 'Threads',
    },
    {
      icon: <FaPinterest />,
      link: 'https://pin.it/49MfW10yh',
      name: 'Pinterest',
    },
    { icon: <FaReddit />, link: 'https://reddit.com', name: 'Reddit' },
  ];

  const policies = [
    { name: 'Privacy Policy', link: '/privacy-policy' },
    { name: 'Terms of Service', link: '/terms-of-service' },
    { name: 'Refund Policy', link: '/refund-policy' },
    { name: 'Shipping Policy', link: '/shipping-policy' },
    { name: 'About', link: '/about' },
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Expert Vets', link: '/vets' },
    { name: 'Tips', link: '/tips' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer
      className="w-full text-white py-12 shadow-inner bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-3xl font-bold text-[#FF6B6B]">
            <FaPaw />
            <span>WarmPaws</span>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <div className="flex items-center gap-2 mb-1">
              <MdEmail className="text-xl" />
              <a
                href="mailto:contact@warmpaws.com"
                className="relative pb-1 border-b-2 border-transparent hover:border-yellow-200 transition-colors"
              >
                contact@warmpaws.com
              </a>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <MdPhone className="text-xl" />
              <a
                href="tel:+8801234567890"
                className="relative pb-1 border-b-2 border-transparent hover:border-yellow-200 transition-colors"
              >
                +880 1234 567 890 , +880 1234 567 891
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEventAvailable className="text-xl" />
              <span>(Sat - Thu, 10:00 AM to 7:00 PM)</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className="relative pb-1 border-b-2 border-transparent hover:border-yellow-200 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            {policies.map(policy => (
              <li key={policy.name}>
                <Link
                  to={policy.link}
                  className="relative pb-1 border-b-2 border-transparent hover:border-yellow-200 transition-colors"
                >
                  {policy.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-center">Follow Us</h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-yellow-200"
              >
                <div className="text-2xl">{social.icon}</div>
                <span className="text-sm mt-1">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" text-center mt-10 text-yellow-100 font-medium text-xs sm:text-sm md:text-base px-4 py-3 rounded-lg">
        &copy; WarmPaws - Pet Care in Winter. All rights reserved -{' '}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
