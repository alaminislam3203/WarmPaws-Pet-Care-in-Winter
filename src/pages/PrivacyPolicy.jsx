import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// React Icons
import {
  FaShieldAlt,
  FaUserShield,
  FaCookieBite,
  FaServer,
  FaLock,
  FaChild,
  FaHistory,
  FaEnvelope,
  FaArrowLeft,
  FaHome,
  FaBookOpen,
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — WarmPaws';
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const effectiveDate = 'October 25, 2025';

  return (
    <div className="w-screen overflow-x-hidden bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="flex justify-center mb-3">
            <FaShieldAlt className="text-4xl text-[#045494]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Effective date: <span className="font-medium">{effectiveDate}</span>
          </p>
        </header>

        {/* Intro */}
        <section className="prose prose-slate max-w-none mb-10 text-gray-700 text-[15px] leading-relaxed">
          <p>
            <strong>WarmPaws</strong> (“we”, “our”, “us”) values your privacy
            and is committed to protecting your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard your
            information when using
            <strong> WarmPaws — Pet Care in Winter</strong>.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaBookOpen className="text-[#045494]" /> Contents
          </h2>
          <ul className="space-y-2 text-sm text-gray-600 ml-1">
            <li>
              <a href="#data-we-collect" className="hover:underline">
                Data We Collect
              </a>
            </li>
            <li>
              <a href="#how-we-use" className="hover:underline">
                How We Use Data
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:underline">
                Cookies & Technologies
              </a>
            </li>
            <li>
              <a href="#third-parties" className="hover:underline">
                Third-Party Services
              </a>
            </li>
            <li>
              <a href="#security" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#your-rights" className="hover:underline">
                Your Rights
              </a>
            </li>
            <li>
              <a href="#children" className="hover:underline">
                Children
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:underline">
                Changes
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Sections */}
        <article className="space-y-12 text-gray-700 text-[15px] leading-relaxed">
          {/* 1. Data Collect */}
          <section id="data-we-collect">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaUserShield className="text-[#045494]" /> 1. Data We Collect
            </h3>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Account info:</strong> name, email, profile photo.
              </li>
              <li>
                <strong>Booking details:</strong> appointments & service
                selections.
              </li>
              <li>
                <strong>Usage data:</strong> device info, browser, IP, pages
                visited.
              </li>
              <li>
                <strong>Google Auth data</strong> when signing in via Firebase.
              </li>
            </ul>
          </section>

          {/* 2. How We Use */}
          <section id="how-we-use">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaServer className="text-[#045494]" /> 2. How We Use Your Data
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Manage accounts & authenticate users.</li>
              <li>Process bookings, reminders & communication.</li>
              <li>Personalize services & recommendations.</li>
              <li>Prevent fraud & enhance security.</li>
            </ul>
          </section>

          {/* 3. Cookies */}
          <section id="cookies">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaCookieBite className="text-[#045494]" /> 3. Cookies &
              Technologies
            </h3>
            <p>
              We use cookies, local storage, and similar tools to improve
              usability, analytics, and user preferences.
            </p>
          </section>

          {/* 4. Third Parties */}
          <section id="third-parties">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaServer className="text-[#045494]" /> 4. Third-Party Services
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Firebase Authentication</strong> for secure login.
              </li>
              <li>Analytics libraries (Swiper, AOS, Framer Motion).</li>
              <li>We never sell your personal data.</li>
            </ul>
          </section>

          {/* 5. Security */}
          <section id="security">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaLock className="text-[#045494]" /> 5. Security Measures
            </h3>
            <p>
              We implement strong technical and physical safeguards, but no
              method is 100% secure.
            </p>
          </section>

          {/* 6. Rights */}
          <section id="your-rights">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaUserShield className="text-[#045494]" /> 6. Your Rights
            </h3>
            <p>
              You may request access, corrections, or deletion of your
              information.
            </p>
          </section>

          {/* 7. Children */}
          <section id="children">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaChild className="text-[#045494]" /> 7. Children’s Privacy
            </h3>
            <p>Our Service is not intended for children under 13.</p>
          </section>

          {/* 8. Changes */}
          <section id="changes">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaHistory className="text-[#045494]" /> 8. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy and will reflect the new
              effective date.
            </p>
          </section>

          {/* 9. Contact */}
          <section id="contact">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 mb-3">
              <FaEnvelope className="text-[#045494]" /> 9. Contact Us
            </h3>
            <p>If you have questions:</p>
            <ul className="pl-1 mt-2 space-y-1">
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@warmpaws.com"
                  className="text-[#045494] hover:underline"
                >
                  contact@warmpaws.com
                </a>
              </li>
              <li>
                <strong>Address:</strong> Dhaka, Bangladesh
              </li>
            </ul>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-600">
            © {new Date().getFullYear()} WarmPaws — Pet Care in Winter
          </span>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 bg-[#045494] text-white text-sm rounded-lg shadow hover:bg-[#034d79] transition"
            >
              <FaArrowLeft /> Back to Home
            </Link>

            <a
              href="mailto:contact@warmpaws.com"
              className="flex items-center gap-2 text-sm text-[#045494] hover:underline"
            >
              <FaEnvelope /> Support
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
