import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Browser = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      
      <div className="max-w-screen-lg w-full overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          
          <div className="flex justify-around mb-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-green-600 text-2xl">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl">
              <FaInstagram />
            </a>
          </div>

          <div className="mb-8">
            <iframe
              title="Lions Cricket Club Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085401132257!2d144.96328031584475!3d-37.81410797975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d2459c3d%3A0x2b0f3e1b9b8a79b8!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1605281279867!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lions Cricket Club</h3>
            <p className="text-gray-600">123 Cricket Lane, Cityville, ST 12345</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: info@lionscricketclub.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
