'use client';

import React from 'react';
import { FaFileContract } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#045494] mb-4 flex items-center justify-center gap-3">
          <FaFileContract className="text-blue-500 text-3xl" /> Terms of Service
        </h1>

        {/* Last updated */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 text-center flex items-center justify-center gap-2">
          <AiOutlineInfoCircle /> Last Updated:{' '}
          {new Date().toLocaleDateString()}
        </p>

        {/* Content Sections */}
        <section className="space-y-6 text-gray-700 text-justify">
          <p>
            Welcome to <strong>Warm Paws - Pet Care in Winter</strong>. By
            accessing or using our website and services, you agree to comply
            with and be bound by these Terms of Service. Please read them
            carefully before proceeding.
          </p>

          {/* Section template */}
          {[
            {
              title: '1. Acceptance of Terms',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: `By using our website, you confirm that you are at least 18 years
              old or have the consent of a legal guardian. If you do not agree
              with any part of these terms, please discontinue using our
              services.`,
            },
            {
              title: '2. Use of Our Services',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: [
                'You agree to use our services only for lawful purposes.',
                'You must not misuse, hack, or interfere with the functionality of the site.',
                'You are responsible for maintaining the confidentiality of your account credentials.',
              ],
            },
            {
              title: '3. Booking and Payments',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: `When booking a service, you agree to provide accurate information
              and make timely payments. All payments are processed securely, and
              refunds are subject to our cancellation policy.`,
            },
            {
              title: '4. User Responsibilities',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: `You agree not to post or share any harmful, offensive, or
              misleading content. We reserve the right to suspend or terminate
              accounts violating our policies without prior notice.`,
            },
            {
              title: '5. Intellectual Property',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: `All content, logos, and materials on this website are the property
              of Warm Paws and are protected by copyright and trademark laws.
              Unauthorized use or duplication is strictly prohibited.`,
            },
            {
              title: '6. Limitation of Liability',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: `We strive to provide reliable information and services, but we are
              not liable for any damages, losses, or inconveniences resulting
              from the use or inability to use our platform.`,
            },
            {
              title: '7. Changes to Terms',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: `We may update these Terms of Service at any time. Continued use of
              our website after such updates constitutes your acceptance of the
              revised terms.`,
            },
            {
              title: '8. Contact Us',
              icon: (
                <AiOutlineInfoCircle className="text-blue-500 text-xl mt-1" />
              ),
              content: (
                <>
                  For any questions about these terms, please contact us at{' '}
                  <a
                    href="mailto:contact@warmpaws.com"
                    className="text-[#FF6B6B] font-medium underline flex items-center gap-1"
                  >
                    <MdEmail /> contact@warmpaws.com
                  </a>
                  .
                </>
              ),
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#045494] mb-3 flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
