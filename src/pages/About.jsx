import React from 'react';
import {
  FaPaw,
  FaSnowflake,
  FaUserShield,
  FaRocket,
  FaHeartbeat,
} from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-200 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10 md:p-14 border border-gray-100">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#045494] mb-6 flex justify-center items-center gap-3">
          <MdPets className="text-[#FF8F4C]" />
          About WarmPaws
        </h1>

        {/* Description */}
        <section className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            <strong className="text-[#045494]">WarmPaws</strong> is a modern,
            user-friendly platform designed to provide winter care solutions for
            pets. From expert veterinarians to reliable pet care products,
            WarmPaws ensures your beloved pets stay warm, healthy, and
            comfortable during cold seasons.
          </p>

          <p>
            This project is built using <strong>React</strong>,
            <strong> Firebase Authentication</strong>, and interactive UI
            libraries to give users a seamless experience. Whether it's browsing
            services, booking appointments, or accessing expert advice —
            everything is just a click away.
          </p>

          <p>
            Our mission is simple:
            <span className="font-semibold text-[#045494]">
              {' '}
              Empower pet owners with trustworthy winter care solutions.{' '}
            </span>
          </p>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-[#045494] mb-6 text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Single Feature */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <FaSnowflake className="text-3xl text-[#0A6ED1]" />
              <p className="text-gray-700">
                Explore winter-specific pet care services and recommended
                products.
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <FaPaw className="text-3xl text-[#FF8F4C]" />
              <p className="text-gray-700">
                Connect with expert veterinarians for guidance and appointments.
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <FaUserShield className="text-3xl text-green-600" />
              <p className="text-gray-700">
                Secure and smooth login with Firebase Authentication.
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <FaRocket className="text-3xl text-purple-600" />
              <p className="text-gray-700">
                Clean, fast and interactive UI for an enhanced user experience.
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <FaHeartbeat className="text-3xl text-red-500" />
              <p className="text-gray-700">
                Trusted guidance to ensure your pets stay healthy and
                comfortable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
