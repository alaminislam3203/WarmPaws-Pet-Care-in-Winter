'use client';

import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const ShippingPolicy = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3">
        <FaShippingFast className="text-blue-500 text-3xl" /> Shipping Policy
      </h1>

      {/* Intro paragraph */}
      <p className="text-gray-700 mb-8 text-center md:text-left leading-relaxed">
        <strong>WarmPaws</strong> provides reliable and fast shipping for all
        pet care products. Below are the key points of our shipping policy:
      </p>

      {/* Shipping points */}
      <ul className="space-y-4">
        {[
          'Orders are processed within 1-2 business days of purchase.',
          'Standard shipping takes 3-7 business days depending on your location.',
          'Expedited shipping options are available at checkout for faster delivery.',
          'Tracking information will be provided via email once your order is shipped.',
          'Shipping fees may vary based on product weight and delivery location.',
        ].map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <AiOutlineCheckCircle className="text-green-500 text-2xl mt-1" />
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>

      {/* Contact paragraph */}
      <p className="text-gray-700 mt-8 text-center md:text-left">
        For any shipping issues or delays, please contact our support team at{' '}
        <a
          href="mailto:contact@warmpaws.com"
          className="underline text-blue-600 flex items-center gap-1"
        >
          <MdEmail /> contact@warmpaws.com
        </a>
        .
      </p>
    </div>
  );
};

export default ShippingPolicy;
