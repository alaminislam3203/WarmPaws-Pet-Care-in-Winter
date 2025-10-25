import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#045494] mb-6">
          About WarmPaws
        </h1>

        {/* Description */}
        <section className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            <strong>WarmPaws</strong> is a responsive and interactive web
            application designed for pet owners to explore winter-specific pet
            care services, expert veterinarians, and recommended products. Users
            can log in, manage their profile, book appointments with
            veterinarians, and browse pet care products.
          </p>

          <p>
            This project leverages <strong>React</strong>,{' '}
            <strong>Firebase Authentication</strong>, and modern frontend
            libraries for animations and interactivity. The platform is designed
            to be user-friendly, ensuring a smooth experience for pet owners
            during the winter season.
          </p>

          <p>
            Our mission is to provide reliable information, easy access to
            expert advice, and quality products to keep your pets healthy,
            happy, and comfortable during cold months.
          </p>
        </section>

        {/* Features / Highlights */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#045494] mb-4 text-center">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Browse winter-specific pet care services and products.</li>
            <li>
              Connect with expert veterinarians for consultations and
              appointments.
            </li>
            <li>
              User-friendly profile management and secure login with Firebase
              Authentication.
            </li>
            <li>
              Interactive UI with smooth animations for better user experience.
            </li>
            <li>
              Reliable and up-to-date information to ensure pet health and
              safety.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
