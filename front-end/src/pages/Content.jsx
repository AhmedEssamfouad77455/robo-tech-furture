import React from 'react';
import ContactMap from '../components/ContactMap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Content = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-12 my-30">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          We’re here to help! Reach out to us anytime — whether it’s a question, feedback, or partnership inquiry.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl font-semibold text-primary mb-3">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">📞 <span className="font-medium">01212219710</span></p>
          <p className="text-lg text-gray-700">📧 <span className="font-medium">info@example.com</span></p>
          <p className="text-lg text-gray-700">📍 Alexandria, Egypt</p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-primary">Working Hours</h3>
            <p className="text-gray-700">🕒 Sunday - Thursday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">🕓 Friday - Saturday: Closed</p>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-8 text-gray-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transform transition duration-300 text-blue-600"
            >
              <FaFacebook size={40} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transform transition duration-300 text-pink-500"
            >
              <FaInstagram size={40} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transform transition duration-300 text-sky-500"
            >
              <FaTwitter size={40} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 rounded-xl overflow-hidden ">
          <ContactMap />
        </div>
      </div>

    
    </div>
  );
};

export default Content;
