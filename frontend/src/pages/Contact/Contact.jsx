import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order status in real time by entering your order information on the Track Order page.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support. You can contact us anytime via email or phone.",
    },
  ];

  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      </motion.div>

      <div className="flex flex-col md:flex-row mb-12 space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" /> 
            Phone: (123) 456-7890
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" /> 
            Email: contact@example.com
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" /> 
            Address: 123 Main Street, City, Country
          </p>
          <img src="https://via.placeholder.com/400x200" alt="Office" className="rounded-lg mt-4" />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-medium text-gray-900 dark:text-gray-100">
                  {faq.question}
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2 group-open:rotate-180 transition-transform duration-300 text-blue-500" />
                </summary>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="h-64 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196543724993!2d-122.41941548468142!3d37.774929779759184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c9a4d21b5%3A0xc3a9c7d50c9b5e7f!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094110%2C%20USA!5e0!3m2!1sen!2sus!4v1616617152010!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </motion.div>
    </section>
  );
}

export default ContactPage;
