import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — WarmPaws';
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const effectiveDate = 'October 25, 2025';

  return (
    <div className="w-screen overflow-x-hidden bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Effective date: <span className="font-medium">{effectiveDate}</span>
          </p>
        </header>

        {/* Intro */}
        <section className="prose prose-slate max-w-none mb-6">
          <p>
            WarmPaws ("we", "our", or "us") values your privacy. This Privacy
            Policy explains how we collect, use, disclose, and protect your
            personal information when you visit or use our web application
            <strong> WarmPaws - Pet Care in Winter</strong>.
          </p>
        </section>

        {/* Table of contents */}
        <nav className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Contents</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#data-we-collect" className="hover:underline">
                Data We Collect
              </a>
            </li>
            <li>
              <a href="#how-we-use" className="hover:underline">
                How We Use Your Data
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:underline">
                Cookies & Similar Technologies
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
                Changes to This Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Sections */}
        <article className="space-y-8 text-gray-700">
          <section id="data-we-collect">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              1. Data We Collect
            </h3>
            <p className="mb-2">
              We collect information that you provide directly to us and
              information collected automatically when you use the Service.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Account information:</strong> name, email, profile photo
                (when you sign up or update your profile).
              </li>
              <li>
                <strong>Booking details:</strong> appointment requests, service
                selections, and any form inputs required to schedule services.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, interactions, device
                and browser information, and IP address for analytics and
                troubleshooting.
              </li>
              <li>
                <strong>Third-party auth data:</strong> when you sign in with
                Google, we receive basic profile info (name, email, photo) via
                Firebase Authentication.
              </li>
            </ul>
          </section>

          <section id="how-we-use">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              2. How We Use Your Data
            </h3>
            <p>
              We use the information to provide, maintain, and improve the
              Service, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Creating and managing your account, and authenticating you via
                Firebase.
              </li>
              <li>
                Processing bookings and communicating with you about
                appointments and updates.
              </li>
              <li>
                Personalizing content and recommending services or products.
              </li>
              <li>
                Detecting and preventing fraud and abuse, and ensuring site
                security.
              </li>
              <li>
                Complying with legal obligations and responding to requests.
              </li>
            </ul>
          </section>

          <section id="cookies">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              3. Cookies & Similar Technologies
            </h3>
            <p>
              We and our service providers use cookies, web beacons, local
              storage, and similar technologies to operate and improve our
              services, analyze usage, and remember preferences. You can manage
              cookie preferences through your browser.
            </p>
          </section>

          <section id="third-parties">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              4. Third-Party Services
            </h3>
            <p>
              We integrate third-party services to power parts of the
              application:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Firebase Authentication:</strong> used for user sign-up
                and sign-in. Firebase's own privacy and security policies apply.
              </li>
              <li>
                <strong>Analytics & UI libraries:</strong> Swiper, Framer
                Motion, AOS, and other libraries may collect non-identifying
                usage data for analytics and performance (as described in their
                docs).
              </li>
              <li>
                We do not sell your personal information to third parties.
              </li>
            </ul>
          </section>

          <section id="security">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              5. Security
            </h3>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect your information. However, no method of
              transmission or storage is completely secure — please be mindful
              when sharing sensitive data.
            </p>
          </section>

          <section id="your-rights">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              6. Your Rights
            </h3>
            <p>
              Depending on your location, you may have rights to access, update,
              correct, or delete your personal information. To exercise these
              rights, contact us using the details below. We will respond to
              verifiable requests in accordance with applicable law.
            </p>
          </section>

          <section id="children">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              7. Children
            </h3>
            <p>
              Our Service is not intended for children under 13. We do not
              knowingly collect personal data from children under the applicable
              age. If you believe we have collected such data, please contact us
              so we can delete it.
            </p>
          </section>

          <section id="changes">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              8. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. When we make
              changes, we will update the effective date above and, where
              appropriate, notify users. Continued use of the Service after
              changes indicates acceptance.
            </p>
          </section>

          <section id="contact">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              9. Contact
            </h3>
            <p className="mb-2">
              If you have questions about this Privacy Policy or requests
              regarding your personal information, please contact:
            </p>
            <ul className="list-none pl-0 text-sm text-gray-700">
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

        {/* Footer actions */}
        <footer className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} WarmPaws — Pet Care in Winter
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#045494] text-white rounded-lg text-sm font-medium hover:bg-[#034d79] transition"
            >
              Back to Home
            </Link>
            <a
              href="mailto:contact@warmpaws.com"
              className="text-sm text-[#045494] hover:underline"
            >
              Contact Support
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
