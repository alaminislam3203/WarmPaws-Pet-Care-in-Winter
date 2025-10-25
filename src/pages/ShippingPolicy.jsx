import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Shipping Policy
      </h1>

      <p className="text-gray-700 mb-4">
        <strong>WarmPaws</strong> provides reliable and fast shipping for all
        pet care products. Below are the key points of our shipping policy:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Orders are processed within 1-2 business days of purchase.</li>
        <li>
          Standard shipping takes 3-7 business days depending on your location.
        </li>
        <li>
          Expedited shipping options are available at checkout for faster
          delivery.
        </li>
        <li>
          Tracking information will be provided via email once your order is
          shipped.
        </li>
        <li>
          Shipping fees may vary based on product weight and delivery location.
        </li>
      </ul>

      <p className="text-gray-700">
        For any shipping issues or delays, please contact our support team at{' '}
        <a
          href="mailto:contact@warmpaws.com"
          className="underline text-blue-600"
        >
          contact@warmpaws.com
        </a>
        .
      </p>
    </div>
  );
};

export default ShippingPolicy;
