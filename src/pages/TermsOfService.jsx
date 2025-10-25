import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#045494] mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-gray-700 text-justify">
          <p>
            Welcome to <strong>Warm Paws - Pet Care in Winter</strong>. By
            accessing or using our website and services, you agree to comply
            with and be bound by these Terms of Service. Please read them
            carefully before proceeding.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using our website, you confirm that you are at least 18 years
              old or have the consent of a legal guardian. If you do not agree
              with any part of these terms, please discontinue using our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              2. Use of Our Services
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You agree to use our services only for lawful purposes.</li>
              <li>
                You must not misuse, hack, or interfere with the functionality
                of the site.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              3. Booking and Payments
            </h2>
            <p>
              When booking a service, you agree to provide accurate information
              and make timely payments. All payments are processed securely, and
              refunds are subject to our cancellation policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              4. User Responsibilities
            </h2>
            <p>
              You agree not to post or share any harmful, offensive, or
              misleading content. We reserve the right to suspend or terminate
              accounts violating our policies without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content, logos, and materials on this website are the property
              of <strong>Warm Paws</strong> and are protected by copyright and
              trademark laws. Unauthorized use or duplication is strictly
              prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              We strive to provide reliable information and services, but we are
              not liable for any damages, losses, or inconveniences resulting
              from the use or inability to use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              7. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service at any time. Continued use of
              our website after such updates constitutes your acceptance of the
              revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#045494] mb-2">
              8. Contact Us
            </h2>
            <p>
              For any questions about these terms, please contact us at{' '}
              <a
                href="mailto:contact@warmpaws.com"
                className="text-[#FF6B6B] font-medium underline"
              >
                contact@warmpaws.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
