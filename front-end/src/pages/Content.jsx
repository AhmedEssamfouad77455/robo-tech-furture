import React from 'react';
import ContactMap from '../components/ContactMap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  gap-2 p-6 container mx-auto">
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
        <p className="text-lg text-gray-700">📞 01212219710</p>
        <p className="text-lg text-gray-700">📧 info@example.com</p>
        <p className="text-gray-600">📍 Alexandria, Egypt</p>

        <div className="flex justify-center md:justify-start gap-6 mt-6 text-gray-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebook size={28} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>

      {/* Right Side - Map */}
      <div className="w-full md:w-1/2 h-full rounded-xl">
        <ContactMap />
      </div>
    </div>
  );
};

export default Content;
