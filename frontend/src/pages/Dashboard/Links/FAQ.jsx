import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What is Lions Cricket Club?",
    answer: "Lions Cricket Club is a premier cricket club known for its competitive spirit and excellent training programs."
  },
  {
    question: "How can I join the club?",
    answer: "You can join the club by filling out the membership form on our website and attending the tryouts."
  },
  {
    question: "What are the membership fees?",
    answer: "Membership fees vary depending on the age group and level of participation. Please visit our membership page for more details."
  },
  {
    question: "Where are the training sessions held?",
    answer: "Training sessions are held at our home ground located at Lions Cricket Ground, Main Street, City."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <motion.div
              initial={false}
              animate={{ height: activeIndex === index ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
