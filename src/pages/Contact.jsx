import React from 'react';
import {
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdMessage,
  MdPerson,
  MdSubject,
} from 'react-icons/md';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#045494] mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Have questions, suggestions, or need help? We’re here to assist you.
          Reach out to us anytime and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-sm">
            <MdEmail className="text-4xl text-[#045494]" />
            <h3 className="mt-3 font-semibold text-[#045494]">Email</h3>
            <p className="text-gray-600 text-sm">support@warmpaws.com</p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-sm">
            <MdPhone className="text-4xl text-[#045494]" />
            <h3 className="mt-3 font-semibold text-[#045494]">Phone</h3>
            <p className="text-gray-600 text-sm">+880 1234 567 890</p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-sm">
            <MdLocationOn className="text-4xl text-[#045494]" />
            <h3 className="mt-3 font-semibold text-[#045494]">Address</h3>
            <p className="text-gray-600 text-sm text-center">
              Mirpur, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold text-[#045494] mb-4 text-center">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
              <MdPerson className="text-2xl text-[#045494]" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
              <MdEmail className="text-2xl text-[#045494]" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
              <MdSubject className="text-2xl text-[#045494]" />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-xl">
              <MdMessage className="text-2xl mt-1 text-[#045494]" />
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-transparent outline-none text-gray-700 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#045494] hover:bg-[#033a6a] text-white py-3 rounded-xl font-semibold shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
