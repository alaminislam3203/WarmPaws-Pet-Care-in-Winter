import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Refund Policy
      </h1>

      <p className="text-gray-700 mb-4">
        At <strong>WarmPaws</strong>, we strive to provide high-quality pet care
        services and products. If you are not satisfied with your purchase or
        service, we offer the following refund options:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>
          Refunds are available for services that were canceled at least 24
          hours prior to the scheduled appointment.
        </li>
        <li>
          Product refunds can be requested within 7 days of purchase, provided
          the product is unopened and in its original condition.
        </li>
        <li>
          Refund requests should be sent to{' '}
          <a
            href="mailto:contact@warmpaws.com"
            className="underline text-blue-600"
          >
            contact@warmpaws.com
          </a>{' '}
          with your order or service details.
        </li>
        <li>
          All approved refunds will be processed within 5-7 business days.
        </li>
      </ul>

      <p className="text-gray-700">
        Please note that some services or products may be non-refundable. For
        any questions, feel free to contact our support team.
      </p>
    </div>
  );
};

export default RefundPolicy;
