'use client';

import React from 'react';
import { FaUndoAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const RefundPolicy = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3 relative">
        <FaUndoAlt className="text-blue-500 text-3xl" /> Refund Policy
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full mt-2"></span>
      </h1>

      {/* Intro paragraph */}
      <p className="text-gray-700 mb-8 text-center md:text-left leading-relaxed">
        At <strong>WarmPaws</strong>, we strive to provide high-quality pet care
        services and products. If you are not satisfied with your purchase or
        service, we offer the following refund options:
      </p>

      {/* Refund list */}
      <ul className="space-y-4">
        <li className="flex items-start gap-4 text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <AiOutlineCheckCircle className="text-green-500 text-2xl mt-1" />
          <span>
            Refunds are available for services that were canceled at least 24
            hours prior to the scheduled appointment.
          </span>
        </li>
        <li className="flex items-start gap-4 text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <AiOutlineCheckCircle className="text-green-500 text-2xl mt-1" />
          <span>
            Product refunds can be requested within 7 days of purchase, provided
            the product is unopened and in its original condition.
          </span>
        </li>
        <li className="flex items-start gap-4 text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <AiOutlineCheckCircle className="text-green-500 text-2xl mt-1" />
          <span>
            Refund requests should be sent to{' '}
            <a
              href="mailto:contact@warmpaws.com"
              className="underline text-blue-600 flex items-center gap-1"
            >
              <MdEmail /> contact@warmpaws.com
            </a>{' '}
            with your order or service details.
          </span>
        </li>
        <li className="flex items-start gap-4 text-gray-700 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <AiOutlineCheckCircle className="text-green-500 text-2xl mt-1" />
          <span>
            All approved refunds will be processed within 5-7 business days.
          </span>
        </li>
      </ul>

      {/* Footer note */}
      <p className="text-gray-700 mt-8 text-center md:text-left">
        Please note that some services or products may be non-refundable. For
        any questions, feel free to contact our support team.
      </p>
    </div>
  );
};

export default RefundPolicy;
